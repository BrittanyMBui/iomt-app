import { Link } from 'react-router-dom';


const PostsCard = (props) => {
    return (
        <div>
            <ul>
                <li>
                    {props.post.title}
                    <br />
                    {props.post.body}
                </li>
                <Link to={`/editpost/${props.post._id}`} >
                    <button>Edit Post</button>
                </Link>
                <br />
                <button>Delete Post</button>
            </ul>
        </div>
    )
}

export default PostsCard;