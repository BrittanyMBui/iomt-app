import React, { useState } from 'react';
import Modal from 'react-modal';
import Login from './Login';

Modal.setAppElement('#root');

const LoginModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="modal">
            <button onClick={toggleModal}>Log In</button>
            <Modal 
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Log In"
            >
                <Login />
                <button onClick={toggleModal}>Close</button>
            </Modal>
        </div>
    )
}

export default LoginModal;