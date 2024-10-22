import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Origins from './pages/Origins';
import BantuExpansion from './pages/BantuExpansion';
import Culture from './pages/Culture';
import Religion from './pages/Religion';
import Food from './pages/Food';
import ModernBaka from './pages/ModernBaka';
import Resources from './pages/Resources';
import migrationImage from './pages/migration.jpg'; // Make sure this path is correct

const App = () => {
    return (
        <Router>
            <div style={{ textAlign: 'center', padding: '20px' }}>
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

                {/* Landing Page Section */}
                <div style={{ padding: '50px', background: '#f0f0f0', borderRadius: '8px', marginTop: '20px' }}>
                    <h1>The Forgotten Tribe: A Green Genocide</h1>
                    <p>
                        The Baka people, one of the oldest tribes on Earth, are facing extinction as their forests disappear.
                        Deforestation and large-scale logging are threatening their land, their culture, and their survival.
                        Help bring awareness to their plight and protect their heritage.
                    </p>
                    <img
                        src={migrationImage}
                        alt="Baka Tribe Migration"
                        style={{ width: '80%', marginTop: '20px', borderRadius: '8px' }}
                    />
                </div>
            </div>
        </Router>
    );
};

export default App;

