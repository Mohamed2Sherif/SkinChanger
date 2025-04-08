import React, { useEffect, useState } from "react";
import { populateCards } from "./cards";
import ChampionSkins from "./champ_skins"; // 👈 Import the skin view
import "./styles/index.css";

const ChampionGrid = () => {
    const [champions, setChampions] = useState([]);
    const [selectedChampion, setSelectedChampion] = useState(null); // 👈 Track selected champ

    useEffect(() => {
        const fetchChampions = async () => {
            const champs = await populateCards();
            setChampions(champs);
        };

        fetchChampions();
    }, []);

    // 🧠 If a champ is selected, show skins instead of grid
    if (selectedChampion) {
        return (
            <div>
                <button
                    onClick={() => setSelectedChampion(null)}
                    className="text-white p-2 bg-[#292b40] rounded mb-4 hover:bg-[#44485f]"
                >
                    ← Back to Champions
                </button>
                <ChampionSkins champId={selectedChampion} />
            </div>
        );
    }

    return (
        <div className="grid grid-cols-6 gap-4 p-6 bg-[#15172b]">
            {champions.map((champ, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setSelectedChampion(champ.id)} // 👈 Set selected champ on click
                >
                    <img
                        src={champ.image_url}
                        alt={champ.champ_code}
                        className="w-20 h-20 rounded-lg border-2 border-[#292b40] hover:border-[#626890] transition"
                    />
                    <span className="text-white text-sm mt-2">{champ.champ_name}</span>
                </div>
            ))}
        </div>
    );
};

export default ChampionGrid;
