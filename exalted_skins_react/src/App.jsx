import React from "react";
import {useState,useEffect} from "react";
import { HashRouter  as Router, Routes, Route } from "react-router-dom"; // 👈 Import router components
import ChampionGrid from "./champ_grid";
import Settings from "./Settings"; // 👈 Import Settings component
function App() {
    return (
        <Router>
            <div className="min-h-screen bg-[#15172b]">
                <Routes>
                    {/* Wrap ALL routes inside <Routes> */}
                    <Route
                        path="/"
                        element={
                            <div className="flex items-center justify-center">
                                <ChampionGrid />
                            </div>
                        }
                    />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;