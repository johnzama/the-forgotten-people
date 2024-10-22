import React from 'react';

const LandingPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>The Forgotten Tribe: A Green Genocide</h1>
            <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                The Baka people, one of the oldest tribes on Earth, are facing extinction as their forests disappear. 
                Deforestation and large-scale logging are threatening their land, their culture, and their survival.
            </p>
            <img 
                src="./pages/migration.jpg" 
                alt="Baka Tribe" 
                style={{ width: '80%', height: 'auto', marginTop: '30px' }}
            />
        </div>
    );
};

export default LandingPage;

