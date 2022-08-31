import React from "react";

import photo from "../../assets/small/commercial/gather-the-magic.jpg";

function Gallery(props) {
    const currentCategory = {
        name: "Gather The Magic",
        description:
            "An application for viewing magic the gathering cards",
    };
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img
                    src={photo}
                />
            </div>
        </section>
    );
}
export default Gallery;