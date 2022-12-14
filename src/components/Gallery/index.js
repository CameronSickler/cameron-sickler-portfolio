import React from 'react';
import PhotoList from '../PhotoList';

function Gallery(props) {
    const { currentCategory } = props;
    return (
        <section>
            <h1 data-testid="h1tag">{currentCategory.name}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;