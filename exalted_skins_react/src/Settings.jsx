import React, { useEffect, useState } from 'react';

export const Settings = ({ onBack }) => {
    const [gamePath, setGamePath] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [placeHolder, setPlaceHolder] = useState('C:\\Riot Games\\League of Legends\\Game');

    useEffect(() => {
        const fetchGamePath = async () => {
            try {
                const placeholder = await window.champions.get_gamePath();
                if (placeholder) {
                    setPlaceHolder(placeholder.game_path);
                }
            } catch (error) {
                console.error("Failed to fetch game path:", error);
            }
        };

        fetchGamePath();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage('');

        try {
            const response = await window.champions.update_game_path(gamePath);
            if (response === true) {
                setMessage('Settings saved successfully!');
                setGamePath(''); // Clear input after successful save
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
        <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl w-full max-w-4xl mx-auto border border-gray-700">
            <div className="flex items-center mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-200 text-gray-300 hover:text-white mr-4"
                    aria-label="Return to previous page"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    Application Settings
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-4">
                    <label htmlFor="gamePath" className="block text-lg font-medium text-gray-300">
                        League of Legends Installation Path
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="gamePath"
                            value={gamePath}
                            onChange={(e) => setGamePath(e.target.value)}
                            className="w-full p-4 text-lg rounded-lg bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder={placeHolder}
                            required
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                        Enter the full path to your League of Legends Game directory (e.g., "C:\Riot Games\League of Legends\Game")
                    </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg font-medium text-white hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-lg"
                    >
                        {isSaving ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Saving...
                            </>
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                                </svg>
                                Save Settings
                            </>
                        )}
                    </button>
                </div>

                {message && (
                    <div className={`p-5 rounded-lg ${message.includes('Error') ? 'bg-red-900/50 border border-red-700' : 'bg-green-900/50 border border-green-700'} transition-all duration-300`}>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-1">
                                {message.includes('Error') ? (
                                    <svg className="h-6 w-6 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            <div className="ml-4">
                                <p className={`text-lg font-medium ${message.includes('Error') ? 'text-red-300' : 'text-green-300'}`}>
                                    {message}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Settings;