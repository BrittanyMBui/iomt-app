import PostsCard from './PostsCard';

const PostsList = (props) => {
    return props.posts.map((postObj) => {
        return <PostsCard key={postObj._id} post={postObj} />
    })
}

export default PostsList;