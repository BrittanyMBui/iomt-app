const PostsCard = (props) => {
    return (
        <div>
            <ul>
                <li>
                    {props.post.title}
                </li>
            </ul>
        </div>
    )
}

export default PostsCard;