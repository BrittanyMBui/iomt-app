import React from 'react';
import PostsList from './PostsList';

class PostsIndex extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/iomtapi/v1/posts')
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData)
            this.setState({
                posts: jsonData,
            })
        })
        .catch((err) => console.log(err))
    };

    render () {
        return(
            <div>
                <h1>All Posts</h1>
                <PostsList posts={this.state.posts} />
            </div>
        );
    }
}

export default PostsIndex;