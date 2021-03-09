import React from 'react';
import { Link } from 'react-router-dom';
import PostsList from './PostsList';

class PostsIndex extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        fetch('https://safe-fortress-45916.herokuapp.com/iomtapi/v1/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/JSON',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData)
            this.setState({
                posts: jsonData,
            })
        })
        .catch((err) => console.log(err))
    };

    handleDeletePost = (postId) => {
        let confirmed = window.confirm('Delete post?');
        if (confirmed) {
            const token = localStorage.getItem('token');
            fetch(`https://safe-fortress-45916.herokuapp.com/iomtapi/v1/posts/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/JSON',
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((response) => response.json())
            .then((jsonData) =>{
                console.log(jsonData)
                const stateCopy = {
                    ...this.state
                }
                const updatedPosts = stateCopy.posts.filter((postObj) => {
                    return postObj._id !== postId
                })

                this.setState({
                    posts: updatedPosts,
                })
            })
            .catch((err) => console.log(err))
        }
    }

    render () {
        return(
            <>
            <div className="my-posts">
                <h1 className="my-posts-header">All Posts</h1>
                <Link to='/newpost'><i className="fas fa-plus"><i class="fas fa-pen-alt"></i></i></Link>
                <PostsList 
                    posts={this.state.posts}
                    deletePost={this.handleDeletePost} 
                />
            </div>
            </>
        );
    }
}

export default PostsIndex;