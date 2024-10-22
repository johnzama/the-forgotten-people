import React from 'react';
import './LandingPage.css'; // External CSS for more control over styling

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-header">
                <h1 className="landing-title">The Forgotten Tribe: A Green Genocide</h1>
                <p className="landing-description">
                    The Baka people, one of the oldest tribes on Earth, are facing extinction as their forests disappear.
                    Deforestation and large-scale logging are threatening their land, their culture, and their survival.
                    Help bring awareness to their plight and protect their heritage.
                </p>
                <button className="cta-button">Learn More</button>
            </div>
            <div className="parallax" />
            <section className="info-section">
                <h2>About the Baka People</h2>
                <p>
                    The Baka people have lived in the rainforests of Cameroon for generations, relying on its rich resources
                    for food, shelter, and medicine. As deforestation continues, their ancestral home is being destroyed,
                    threatening their very existence. Discover how you can contribute to saving their land and culture.
                </p>
            </section>
            <section className="gallery-section">
                <h2>Gallery</h2>
                <div className="gallery">
                    <img src="./pages/migration.jpg" alt="Baka Tribe Migration" />
                    {/* Add more images here */}
                </div>
            </section>
        </div>
    );
};

export default LandingPage;

