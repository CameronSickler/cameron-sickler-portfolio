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
                'Run Buddy is a mock website that offers fitness training services. This was my first learning project in the University of Wisconsin Coding Bootcamp. HTML is the primary language used to develop this website.'
        },
        {
            name: 'Meal Maker',
            category: 'Experience',
            description:
                'Meal Maker is a mobile first application created as a tool to help users find recipes by inputing food ingredients and returning recipes containing those ingredients to the user. This was our first group project in the University of Wisconsin Full Stack Coding Bootcamp. Materialize CSS, Spoonacular, Edamam, and Javascript are primary resources used to develop this application.'
        },
        {
            name: 'Coding N Kobolds',
            category: 'Experience',
            description:
                'Coding N Kobolds fantasy avatar creator application that allows the user to create, edit, and save custom avatars. This was our second group project in the University of Wisconsin Full Stack Coding Bootcamp. Node Package Manager (NPM), My Structured Query Language (MYSQL), Sequelize, Heroku, Handlebars, Bootstrap CSS, and Javascript are the primary resources used to develop this application.'
        },
        {
            name: 'Gather The Magic',
            category: 'Experience',
            description:
                'Gather the Magic is a full stack single page application (SPA) that allows users to view Magic the Gathering cards. This was our last group project in the University of Wisconsin Full Stack Coding Bootcamp. MongoDB, GraphQL API, Express.js, Node.js, REACT, Heroku, and Javascript are the primary resources used to develop this application.'
        }, {
            name: 'Cameron Sickler',
            category: 'Bio',
            description:
                "My name is Cameron Sickler and I am a recent graduate of the University of Wisconsin Extended Campuses Full Stack Computer Coding Bootcamp. Prior to coding I obtained a Bachelor's degree in Communication from the University of Wisconsin Eau Claire and an Associate Degree from the University of Wisconsin Fox Valley."

        }, {
            name: 'Hobbies',
            category: 'Bio',
            description:
                'When I am away from my desk I enjoy fishing with my grandparents (as seen above), cycling, sandpit volleyball leagues, bringing my dog to the dog park, and causally learning spoken languages (currently working on Italian).'

        }, {
            name: 'Personal Life',
            category: 'Bio',
            description:
                'I currently reside in Madison Wisconsin and have been living here since 2021. I try to explore at least one local event a week if I can! I live here with my dog and two cats.'

        }, {
            name: 'Certification',
            category: 'Resume',
            description:
                'My certification obtained on August 4th 2022 for successfully completing the University of Wisconsin Extended Campuses Full Stack Computer Coding Bootcamp.'

        }, {
            name: 'Resume',
            category: 'Resume',
            description:
                'Formal documentation detailing my work history and relevant experience.'

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