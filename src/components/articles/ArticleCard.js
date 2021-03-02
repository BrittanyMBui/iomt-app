const ArticleCard = (props) => {
    return (
        <>
            <div>
                <ul>
                    <li><a href={props.article.url} target="_blank">{props.article.title}</a></li>
                </ul>
            </div>
        </>
    )
}

export default ArticleCard;