import React, { useState } from 'react';
import Modal from 'react-modal';
import Login from './Login';

Modal.setAppElement('#root');

const LoginModal = ({ setToken }) => {
    const [isOpen, setIsOpen] = useState(false);


    function toggleModal() {
        setIsOpen(!isOpen);
    }

    const styles = {
        loginButton: {
          textDecoration: 'none',
          cursor: 'pointer',
        }
    };


    return (
        <div>
            <span className="login-link" onClick={toggleModal}>Log In</span>
            <Modal 
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className="mymodal"
                overlayClassName="myoverlay"
            >
                <div>
                    <Login setToken={setToken} />
                </div>
            </Modal>
        </div>
    )
}

export default LoginModal;