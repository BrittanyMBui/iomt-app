import { Link } from 'react-router-dom';


const PostsCard = (props) => {
    return (
        <>
            <div>
                <h3>{props.post.title}</h3>
                <p>{props.post.body}</p>
            </div>
            <br />
            <Link to={`/editpost/${props.post._id}`} >
                <button>Edit Post</button>
            </Link>
            <br />
            <button onClick={() => props.deletePost(props.post._id)}>Delete Post</button>
            <hr />
        </>
    )
}

export default PostsCard;