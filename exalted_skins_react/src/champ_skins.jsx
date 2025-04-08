import React, { useEffect, useState } from "react";
import "./styles/index.css";
import {handleSkinSelected} from "./cards";

const ChampionSkins = ({ champId }) => {
    const [skins, setSkins] = useState([]);
    const [selectedSkin,setSelectedSkin] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    useEffect(() => {
        const fetchChampionSkins = async () => {
            try {
                const data = await window.champions.get_skins(champId); // Use champId here
                const filtered = data.filter((skin) => skin.skin_name !== "default")
                setSkins(filtered);
            } catch (error) {
                console.error("Failed to fetch skins", error);
            }
        };

        if (champId) { // Only fetch skins if champId is available
            fetchChampionSkins();
        }
    }, [champId]); // This ensures it re-fetches when champId changes

    return (
        <div className="relative p-6 bg-[#15172b]">
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
                <div key={index} className="flex flex-col items-center"
                     onClick={() => handleSkinSelected(skin,setShowSuccess,setShowError)}
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