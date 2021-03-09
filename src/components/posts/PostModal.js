import PostsCard from './PostsCard';
import React, { useState } from 'react';
import Modal from 'react-modal';

const PostModal = () => {
    const [isOpen, setIsOpen] = useState(false);


    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return(
        <div>
            <span onClick={toggleModal}>View</span>
            <Modal 
                isOpen={isOpen}
                onRequestClose={toggleModal}
                className="mymodal"
                overlayClassName="myoverlay"
            >
                <div>
                    <PostsCard />
                </div>
            </Modal>
        </div>
    );
}

export default PostModal;