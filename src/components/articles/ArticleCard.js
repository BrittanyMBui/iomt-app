const ArticleCard = (props) => {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <a href={props.article.url} target="_blank">{props.article.title}</a>
                        <br />
                        <img src={props.article.urlToImage} />
                        <br />
                        <button>Save</button>
                        <button>Share</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ArticleCard;