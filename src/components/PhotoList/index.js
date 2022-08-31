import React, { useState } from 'react';

const PhotoList = ({ category }) => {
    const [photos] = useState([
        {
            name: 'Run Buddy',
            category: 'commercial',
            description:
                'Description Here'
        },
        {
            name: 'Meal Maker',
            category: 'commercial',
            description:
                'Description Here'
        },
        {
            name: 'Coding N Kobolds',
            category: 'commercial',
            description:
                'Description Here'
        },
        {
            name: 'Gather The Magic',
            category: 'commercial',
            description:
                'Description Here'
        }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;
