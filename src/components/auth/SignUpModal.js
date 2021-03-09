import React, { useState } from 'react';
import Modal from 'react-modal';
import SignUp from './SignUp';

Modal.setAppElement('#root');

const SignUpModal = ({ setToken }) => {
    const [isOpen, setIsOpen] = useState(false);


    function toggleModal() {
        setIsOpen(!isOpen);
    }


    return (
        <div>
            <span className="signup-link" onClick={toggleModal}>Sign Up</span>
            <Modal 
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className="signupmodal"
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