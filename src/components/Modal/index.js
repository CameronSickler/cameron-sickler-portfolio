import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const { name, description, category, link, index } = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name} </h3>
                <a href={link} rel="noreferrer" target="_blank">
                    <img
                        src={require(`../../assets/small/${category}/${index}.jpg`)}
                        alt="current category"
                    />
                </a>
                <p>{description}</p>
                <button type="button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
