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
                <div className="absolute top-0 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-10">
                    Skin Applied successfully!
                </div>
            )}
            {showError && (
                <div className="absolute top-0 right-5 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-10">
                    Error Happened While Injecting Skin!
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