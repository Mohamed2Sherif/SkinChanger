import React, { useEffect, useState, useMemo } from "react";
import { populateCards } from "./cards";
import ChampionSkins from "./champ_skins";
import { useNavigate } from "react-router-dom"; // 👈 Import useNavigate
import { FiSettings } from "react-icons/fi"; // 👈 Import settings icon (you can use any icon library)

const ChampionGrid = () => {
    const [champions, setChampions] = useState([]);
    const [selectedChampion, setSelectedChampion] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate(); // 👈 Initialize navigate

    useEffect(() => {
        const fetchChampions = async () => {
            const champs = await populateCards();
            setChampions(champs);
        };

        fetchChampions();
    }, []);

    const filteredChampions = useMemo(() => {
        return champions.filter(champ =>
            champ.champ_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            champ.champ_code.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [champions, searchTerm]);

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
        <div className="p-6 bg-[#15172b]">
            {/* Search Box and Settings */}
            <div className="mb-6 flex items-center gap-4">
                <div className="flex-1">
                    <input
                        type="text"
                        placeholder="Search champions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 rounded-lg bg-[#292b40] text-white placeholder-[#626890] focus:outline-none focus:ring-2 focus:ring-[#626890]"
                    />
                </div>
                <div>
                    <button
                        onClick={() => navigate('/settings')} // 👈 Navigate to settings
                        className="p-3 rounded-lg bg-[#292b40] text-white hover:bg-[#44485f] transition"
                        aria-label="Settings"
                    >
                        <FiSettings size={20} /> {/* 👈 Settings icon */}
                    </button>
                </div>
            </div>

            {/* Champion Grid */}
            <div className="grid grid-cols-6 gap-4">
                {filteredChampions.map((champ, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => setSelectedChampion(champ.id)}
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
        </div>
    );
};

export default ChampionGrid;