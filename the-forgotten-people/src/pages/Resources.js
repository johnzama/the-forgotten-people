import React from 'react';
import migrationImage from './migration.jpg'; // Import the image

const Resources = () => {
    return (
        <div>
            <h1>Resources and Learning</h1>
            <p>Find more resources and information on the Baka people, their culture, and history for those interested in learning more.</p>
            <p>
                The Baka people, like many indigenous communities, are facing challenges as their ancestral lands are increasingly threatened by deforestation. 
                Large-scale logging and land clearance for agriculture have led to the destruction of their forests, 
                disrupting their traditional way of life and threatening their survival.
            </p>
            <img 
                src={migrationImage} 
                alt="Early Bantu migration or hunter-gatherer tribe" 
                style={{ width: '100%', height: 'auto', marginTop: '20px' }}
            />
            <p style={{ marginTop: '20px' }}>
                The loss of forest not only impacts the Baka's ability to gather food and hunt but also threatens their cultural heritage and knowledge systems 
                tied to the forest. Without their forest home, the Baka people face an uncertain future. Conservation and sustainable development efforts 
                are critical to preserving their land and their way of life.
            </p>
        </div>
    );
};

export default Resources;

