import React from 'react';
import './Modal.scss'

const { useEffect} = React;

const Modal = ({ item, close }) => {
    useEffect(() => {
        function onKeyDown(event) {
            if (event.keyCode === 27) {

                // Closing the modal when the Escape key is pressed
                close(null);
            }
        }

        // Prevents scolling
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    });
    
    return (
        <div className="modal__backdrop">
            <div className="modal__container">
                <h3 className="modal__title">Name of the item: {item.text}</h3>
                <button type="button" onClick={e => {
                            e.preventDefault();
                            close(null);
                            }}>X</button>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Lectus arcu bibendum at varius vel pharetra vel.
                </p><br/>
                <h4>ID of the item: {item.id}</h4>
                <p>To close this modal, press the X button or use the Escape key.</p>
                <p className='small-text'>also scrolling is disabled</p>
            </div>
        </div>
    );
};

export default Modal;
