import React, {useEffect, useState, useMemo} from "react";
import {generateTokenAsync, handleSkinSelected, populateCards, setupMessageHandler, skinMapInstance} from "./cards";
import ChampionSkins from "./champ_skins";
import {useNavigate} from "react-router-dom";
import {FiSettings, FiCopy, FiUsers, FiPlus, FiLogIn} from "react-icons/fi";
import {Room, RoomEvent, RemoteParticipant } from "livekit-client";
const LIVEKIT_SERVER = window.champions.LiveKitUrl;
import Settings from "./settings";
const ChampionGrid = () => {
    // State management
    const [champions, setChampions] = useState([]);
    const [selectedChampion, setSelectedChampion] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [partyMode, setPartyMode] = useState(false);
    const [roomId, setRoomId] = useState("");
    const [inputRoomId, setInputRoomId] = useState("");
    const [room, setRoom] = useState(null);
    const [participants, setParticipants] = useState([]);
    const [isHost, setIsHost] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showJoinModal, setShowJoinModal] = useState(false);
    const navigate = useNavigate();
    const [showSettings, setShowSettings] = useState(false);

    // Initialize LiveKit room (host)
    const initLiveKitRoom = async () => {
        setIsLoading(true);
        setError(null);
        const newRoomId = generateRoomId();
        setRoomId(newRoomId);
        const identity = `host-${generateRoomId()}`;
        setIsHost(true);

        try {
            const newRoom = new Room({
                adaptiveStream: true,
                dynacast: true,
            });
            setRoom(newRoom);

            await newRoom.connect(
                LIVEKIT_SERVER,
                await generateTokenAsync(newRoomId, identity)
            );

            setupRoomListeners(newRoom,newRoomId);
            setPartyMode(true);
        } catch (error) {
            console.error("Failed to connect to LiveKit:", error);
            setError("Failed to start party mode. Please try again.");
            cleanupRoom();
        } finally {
            setIsLoading(false);
        }
    };

    // Join existing LiveKit room
    const joinLiveKitRoom = async () => {
        if (!inputRoomId.trim()) return;

        setIsLoading(true);
        setError(null);
        const identity = `guest-${generateRoomId()}`;
        setIsHost(false);

        try {
            const newRoom = new Room({
                adaptiveStream: true,
                dynacast: true,
            });
            setRoom(newRoom);

            await newRoom.connect(
                LIVEKIT_SERVER,
                await generateTokenAsync(inputRoomId, identity)
            );

            setRoomId(inputRoomId);
            setupRoomListeners(newRoom,inputRoomId);
            setPartyMode(true);
            setShowJoinModal(false);
        } catch (error) {
            console.error("Failed to join LiveKit room:", error);
            setError("Failed to join party. Check the Room ID and try again.");
            cleanupRoom();
        } finally {
            setIsLoading(false);
        }
    };

    // Set up room event listeners
    const setupRoomListeners = (room,roomId) => {
        let closeConnection;
        try{
            window.champions.get_participants(roomId).then((particip) => {
                setParticipants(particip);
            })
            closeConnection= setupMessageHandler(room,skinMapInstance);
            room
                .on(RoomEvent.ParticipantConnected, (participant) => {
                    setParticipants(prev => [...prev, participant]);
                })
                .on(RoomEvent.ParticipantDisconnected, (participant) => {
                    setParticipants(prev => prev.filter(p => p !== participant));
                })
                .on(RoomEvent.Disconnected, () => {
                    handleDisconnect();
                });
        }
        catch (error){
            if (closeConnection) {
                closeConnection();
            }
            console.error("Error in setupRoomListeners:", error); // also good to log

        }

    };

    // Clean up room resources
    const cleanupRoom = () => {
        if (room) {
            room.disconnect();
        }
        setRoom(null);
        setRoomId("");
        setParticipants([]);
        setIsHost(false);
        setPartyMode(false);
    };

    // Handle disconnection
    const handleDisconnect = () => {
        cleanupRoom();
        setError("Disconnected from the party");
    };

    // Generate random ID
    const generateRoomId = () => {
        return Math.random().toString(36).substring(2, 8);
    };

    // Toggle party mode
    const togglePartyMode = async () => {
        if (partyMode) {
            await cleanupRoom();
        } else {
            setShowJoinModal(true);
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            cleanupRoom();
        };
    }, []);

    // Load champions data
    useEffect(() => {
        const fetchChampions = async () => {
            const champs = await populateCards();
            setChampions(champs);
        };
        fetchChampions();
    }, []);

    // Filter champions based on search term
    const filteredChampions = useMemo(() => {
        return champions.filter(champ =>
            champ.champ_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            champ.champ_code.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [champions, searchTerm]);

    if (selectedChampion) {
        return (
            <div className="p-6 bg-[#15172b]">
                <button
                    onClick={() => setSelectedChampion(null)}
                    className="text-white p-2 bg-[#292b40] rounded mb-4 hover:bg-[#44485f]"
                >
                    ← Back to Champions
                </button>
                <ChampionSkins champId={selectedChampion} room={room}/>
            </div>
        );
    }
    if (showSettings) {
        return <Settings onBack={() => setShowSettings(false)} />;
    }


    return (
        <div className="p-6 bg-[#15172b] min-h-screen">
            {/* Search Box and Action Buttons */}
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
                <div className="flex gap-2">
                    <button
                        onClick={togglePartyMode}
                        disabled={isLoading}
                        className={`p-3 rounded-lg flex items-center gap-2 ${
                            partyMode
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-[#292b40] hover:bg-[#44485f]"
                        } text-white transition disabled:opacity-50`}
                    >
                        {isLoading ? (
                            "Loading..."
                        ) : partyMode ? (
                            <>
                                <span>Party Mode 🎉</span>
                                <span className="bg-white text-green-600 text-xs px-2 py-1 rounded-full">
                                    {participants.length}
                                </span>
                            </>
                        ) : (
                            "Party Mode"
                        )}
                    </button>
                    <button
                        onClick={() => setShowSettings(true)}
                        className="p-3 rounded-lg bg-[#292b40] text-white hover:bg-[#44485f] transition"
                        aria-label="Settings"
                    >
                        <FiSettings size={20} />
                    </button>
                </div>
            </div>

            {/* Party Mode Information */}
            {partyMode && (
                <div className="mb-6 p-4 bg-[#292b40] rounded-lg text-white">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <FiUsers/> {isHost ? "Hosting" : "Joined"} Party
                            </h3>
                            <p className="mt-1">Room ID: {roomId}</p>
                        </div>
                        <button
                            onClick={() => navigator.clipboard.writeText(roomId)}
                            className="flex items-center gap-1 px-3 py-2 bg-[#44485f] rounded hover:bg-[#626890]"
                        >
                            <FiCopy/> Copy
                        </button>
                    </div>

                    {/* Participants List */}
                    <div className="mt-4">
                        <h4 className="font-semibold mb-2">Participants ({participants.length})</h4>
                        <ul className="space-y-2">
                            {participants.map((participant, index) => (
                                <li key={index} className="flex items-center gap-2 p-2 bg-[#15172b] rounded">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                        {participant.identity.charAt(0).toUpperCase()}
                                    </div>
                                    <span>{participant.identity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Join Party Modal */}
            {showJoinModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#292b40] p-6 rounded-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-4">Join Party Mode</h3>

                        <div className="mb-4">
                            <label className="block mb-2">Enter Room ID</label>
                            <input
                                type="text"
                                value={inputRoomId}
                                onChange={(e) => setInputRoomId(e.target.value)}
                                className="w-full p-3 rounded bg-[#15172b] text-white"
                                placeholder="Paste room ID here"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setInputRoomId("");
                                    setShowJoinModal(false);
                                }}
                                className="flex-1 p-3 bg-gray-600 rounded hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={joinLiveKitRoom}
                                disabled={!inputRoomId.trim() || isLoading}
                                className="flex-1 p-3 bg-green-600 rounded hover:bg-green-700 disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                <FiLogIn/> Join
                            </button>
                        </div>

                        <div className="mt-4 pt-4 border-t border-[#44485f]">
                            <p className="text-center">Or</p>
                            <button
                                onClick={() => {
                                    setShowJoinModal(false);
                                    initLiveKitRoom();
                                }}
                                className="w-full mt-2 p-3 bg-blue-600 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
                            >
                                <FiPlus/> Create New Party
                            </button>
                        </div>

                        {error && (
                            <div className="mt-4 p-2 bg-red-500 text-white rounded text-sm">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Error Message */}
            {error && !showJoinModal && (
                <div className="mb-4 p-3 bg-red-500 text-white rounded-lg">
                    {error}
                </div>
            )}

            {/* Champion Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredChampions.map((champ, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center cursor-pointer group"
                        onClick={() => setSelectedChampion(champ.id)}
                    >
                        <img
                            src={champ.image_url}
                            alt={champ.champ_code}
                            className="w-20 h-20 rounded-lg border-2 border-[#292b40] group-hover:border-[#626890] transition"
                        />
                        <span className="text-white text-sm mt-2 group-hover:text-[#a0a3c4] transition">
                            {champ.champ_name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChampionGrid;