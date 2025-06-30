import React, {useEffect, useState} from "react";
import "./styles/index.css";
import {handleSkinSelected} from "./cards";


const ChampionSkins = ({champId, room}) => {
    const [skins, setSkins] = useState([]);
    const [selectedSkin, setSelectedSkin] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // New loading state
    const [selectedChromas, setSelectedChromas] = useState({});

    useEffect(() => {
        const fetchChampionSkins = async () => {
            try {
                const data = await window.champions.get_skins(champId);
                const filtered = data.filter((skin) => skin.skin_name !== "default");
                setSkins(filtered);
            } catch (error) {
                console.error("Failed to fetch skins", error);
            }
        };

        if (champId) {
            fetchChampionSkins();
        }
    }, [champId]);

    const handleSkinClick = async (skin) => {
        setIsLoading(true);

        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        try {
            await Promise.all([
                handleSkinSelected(skin, setShowSuccess, setShowError, room),
                delay(3000) // Ensure minimum 2.3-second wait
            ]);
        } catch (error) {
            console.error("Error applying skin:", error);
            setShowError(true);
        } finally {
            setIsLoading(false);
        }
    };

    async function handleChromaClick(skin, chroma_id) {
        setIsLoading(true);

        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        try {
            await Promise.all([
                handleSkinSelected(skin, setShowSuccess, setShowError, room,chroma_id),
                delay(3000) // Ensure minimum 2.3-second wait
            ]);
        } catch (error) {
            console.error("Error applying skin:", error);
            setShowError(true);
        } finally {
            setIsLoading(false);
        }
    };
    const handleChromaHover = (index, chromaId) => {
            setSelectedChromas(prev => ({...prev, [index]: chromaId}));
        };

        return (
            <div className="relative p-6 bg-[#15172b]">
                {/* Loading overlay */}
                {isLoading && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="text-white text-2xl flex flex-col items-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
                            Applying skin...
                        </div>
                    </div>
                )}

                {showSuccess && (
                    <div
                        className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1.5 rounded-md shadow-md text-sm z-10">
                        <div className="flex items-center gap-1.5">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span>Skin applied successfully!</span>
                        </div>
                    </div>
                )}
                {showError && (
                    <div
                        className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1.5 rounded-md shadow-md text-sm z-10">
                        <div className="flex items-center gap-1.5">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span>Skin injection failed - check game path</span>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-6 gap-4 p-6 bg-[#15172b]">
                    {skins.map((skin, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center"
                            onClick={() => handleSkinClick(skin)}
                        >
                            <div className="relative w-308 h-560">
                                <img
                                    src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${skin.champion.champ_code}_${skin.skin_number}.jpg`}
                                    alt={skin.skin_name}
                                    className="w-full h-full rounded-lg border-2 border-[#292b40] hover:border-[#626890] transition object-cover"
                                />

                                {skin.Chromas && skin.Chromas.length > 0 && skin.Chromas.map((chroma) =>
                                        selectedChromas[index] === chroma.chroma_id && (
                                            <div
                                                key={chroma.chroma_id}
                                                className="absolute inset-0 z-30 flex items-center justify-center"
                                                style={{background: 'rgba(0,0,0,0.8)'}}
                                            >
                                                <img
                                                    src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-chroma-images/${skin.champion.id}/${chroma.chroma_id}.png`}
                                                    alt={`Chroma ${chroma.chroma_id}`}
                                                    className="w-full h-full object-contain rounded-lg"
                                                />
                                            </div>
                                        )
                                )}

                                {skin.Chromas && skin.Chromas.length > 0 && (
                                    <div
                                        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap gap-1 z-40 w-auto max-w-[90%]">
                                        {skin.Chromas.map((chroma) => (
                                            <div key={chroma.chroma_id} className="relative group">
                                                <div
                                                    className={`w-3 h-3 rounded-full border border-white flex items-center justify-center text-[10px] font-bold cursor-pointer transition ring-2 ${selectedChromas[index] === chroma.chroma_id ? 'ring-yellow-400' : 'ring-transparent'}`}
                                                    style={{background: chroma.color, opacity: 0.7}}
                                                    onMouseEnter={e => {
                                                        e.stopPropagation();
                                                        handleChromaHover(index, chroma.chroma_id);
                                                    }}
                                                    onMouseLeave={e => {
                                                        e.stopPropagation();
                                                        handleChromaHover(index, null);
                                                    }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleChromaClick(skin, chroma.chroma_id)
                                                    }}
                                                >
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <span className="text-white text-sm mt-2">{skin.skin_name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    export default ChampionSkins;