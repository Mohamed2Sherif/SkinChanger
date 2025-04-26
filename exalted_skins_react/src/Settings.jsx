import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();
    const [gamePath, setGamePath] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [placeHolder, setPlaceHolder] = useState('C:\\Riot Games\\League of Legends\\Game');
    useEffect( () => {

        const fetchGamePath = async () => {
            try {
                const placeholder = await window.champions.get_gamePath();
                if(placeholder){
                    setPlaceHolder(placeholder.game_path);
                }
            } catch (error) {
                console.error("Failed to fetch game path:", error);
            }
        };

        fetchGamePath();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage('');

        try {
            // Replace with your actual API call
            const response = await window.champions.update_game_path(gamePath)
            if (response == true) {
                setMessage('Settings saved successfully!');
                // Optional: Reset form or navigate away
                // navigate('/');
            } else {
                throw new Error('Failed to save settings');
            }
        } catch (error) {
            setMessage('Error saving settings: ' + error.message);
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="p-6 bg-[#15172b] text-white max-w-2xl mx-auto">
            <button
                onClick={() => navigate('/')}
                className="mb-4 p-2 bg-[#292b40] rounded hover:bg-[#44485f] transition"
            >
                ← Return to Home
            </button>
            <h1 className="text-2xl mb-4">Settings</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="gamePath" className="block mb-2">
                        Game Installation Path:
                    </label>
                    <input
                        type="text"
                        id="gamePath"
                        value={gamePath}
                        onChange={(e) => setGamePath(e.target.value)}
                        className="w-full p-3 rounded-lg bg-[#292b40] text-white focus:outline-none focus:ring-2 focus:ring-[#626890]"
                        placeholder={placeHolder}
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSaving}
                    className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {isSaving ? 'Saving...' : 'Save Settings'}
                </button>

                {message && (
                    <p className={`mt-4 p-2 rounded ${message.includes('Error') ? 'bg-red-900' : 'bg-green-900'}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default Settings;