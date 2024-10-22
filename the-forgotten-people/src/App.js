import React from 'react';

const LandingPage = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f5f5f5'
        }}>
            <h1 style={{
                fontSize: '3.5rem',
                fontWeight: 'bold',
                color: '#2c3e50',
                marginBottom: '20px'
            }}>
                The Forgotten Tribe: A Green Genocide
            </h1>
            <p style={{
                fontSize: '1.5rem',
                maxWidth: '800px',
                color: '#34495e',
                margin: '0 auto',
                lineHeight: '1.6'
            }}>
                The Baka people, one of the oldest tribes on Earth, are facing extinction as their forests disappear. 
                Deforestation and large-scale logging are threatening their land, their culture, and their survival. 
                Help bring awareness to their plight and protect their heritage.
            </p>
            <img 
                src="./pages/migration.jpg" 
                alt="Baka Tribe Migration" 
                style={{
                    width: '80%',
                    height: 'auto',
                    marginTop: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                }}
            />
        </div>
    );
};

export default LandingPage;

