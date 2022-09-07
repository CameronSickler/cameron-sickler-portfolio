import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([

        {
            name: 'Run Buddy',
            category: 'Experience',
            description:
                'This application was primarily built with vanilla HTML'
        },
        {
            name: 'Meal Maker',
            category: 'Experience',
            description:
                'This application is built with Javascript, HTML, Bootstrap CSS, and Web API.'
        },
        {
            name: 'Coding N Kobolds',
            category: 'Experience',
            description:
                'Description Here'
        },
        {
            name: 'Gather The Magic',
            category: 'Experience',
            description:
                'Description Here'
        }, {
            name: 'Me',
            category: 'Bio',
            description:
                'Myself in a photo'

        }, {
            name: 'Me at Wedding',
            category: 'Bio',
            description:
                'Myself in a photo at a wedding'

        }, {
            name: 'Certification',
            category: 'Resume',
            description:
                'My Certification'

        }, {
            name: 'Resume',
            category: 'Resume',
            description:
                'My Resume'

        }
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {isModalOpen && (
                <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
            )}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(image, i)}
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;