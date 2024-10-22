// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/origins">Origins</Link></li>
                <li><Link to="/bantu-expansion">Bantu Expansion</Link></li>
                <li><Link to="/culture">Culture</Link></li>
                <li><Link to="/religion">Religion</Link></li>
                <li><Link to="/food">Food</Link></li>
                <li><Link to="/modern-baka">Modern Baka</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;

