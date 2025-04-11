import React, { useEffect, useState } from "react";
import "./styles/index.css";
import { handleSkinSelected } from "./cards";

const ChampionSkins = ({ champId }) => {
    const [skins, setSkins] = useState([]);
    const [selectedSkin, setSelectedSkin] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // New loading state

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
        try {
            await handleSkinSelected(skin, setShowSuccess, setShowError);
        } catch (error) {
            console.error("Error applying skin:", error);
            setShowError(true);
        } finally {
            setIsLoading(false); // Hide loader when done
        }
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
                <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1.5 rounded-md shadow-md text-sm z-10">
                    <div className="flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Skin applied successfully!</span>
                    </div>
                </div>
            )}
            {showError && (
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1.5 rounded-md shadow-md text-sm z-10">
                    <div className="flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
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
                        onClick={() => handleSkinClick(skin)} // Use the new handler
                    >
                        <img
                            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${skin.champion.champ_code}_${skin.skin_number}.jpg`}
                            alt={skin.skin_name}
                            className="w-308 h-560 rounded-lg border-2 border-[#292b40] hover:border-[#626890] transition"
                        />
                        <span className="text-white text-sm mt-2">{skin.skin_name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChampionSkins;