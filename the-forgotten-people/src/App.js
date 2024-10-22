import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Origins from './pages/Origins';
import BantuExpansion from './pages/BantuExpansion';
import Culture from './pages/Culture';
import Religion from './pages/Religion'; // Ensure this matches the actual file name
import Food from './pages/Food';
import ModernBaka from './pages/ModernBaka';
import Resources from './pages/Resources';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/origins" element={<Origins />} />
                    <Route path="/bantu-expansion" element={<BantuExpansion />} />
                    <Route path="/culture" element={<Culture />} />
                    <Route path="/religion" element={<Religion />} />
                    <Route path="/food" element={<Food />} />
                    <Route path="/modern-baka" element={<ModernBaka />} />
                    <Route path="/resources" element={<Resources />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

