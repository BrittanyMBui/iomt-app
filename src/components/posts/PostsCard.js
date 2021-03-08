import { Link } from 'react-router-dom';


const PostsCard = (props) => {
    return (
        <>
            <div>
                <h3>{props.post.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: props.post.body}} />
            </div>
            <br />
            <Link to={`/editpost/${props.post._id}`} >
                <i class="fas fa-edit"></i>
            </Link>
            {' '}
            <a onClick={() => props.deletePost(props.post._id)}><i class="fas fa-trash-alt"></i></a>
        </>
    )
}

export default PostsCard;