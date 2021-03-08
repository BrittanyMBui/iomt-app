import React, { useState } from 'react';
import Modal from 'react-modal';
import SignUp from './SignUp';

Modal.setAppElement('#root');

const SignUpModal = ({ setToken }) => {
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
            <span style={styles.loginButton} onClick={toggleModal}>Log In</span>
            <Modal 
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className="mymodal"
                overlayClassName="myoverlay"
            >
                <div>
                    <SignUp setToken={setToken} />
                </div>
            </Modal>
        </div>
    )
}

export default SignUpModal;