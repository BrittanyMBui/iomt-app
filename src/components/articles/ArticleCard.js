import Share from '../Share';

const ArticleCard = (props) => {

    return (
        <>
            <div>
                <ul>
                    <li className="article-item">

                        <a href={props.article.url} target="_blank" rel="noreferrer">
                            <img src={props.article.urlToImage} className="article-photo" />
                        </a>
                        <Share article={props.article} />
                        <br />
                        <br />
                        <a href={props.article.url} target="_blank" rel="noreferrer" alt="article" className="article-title">{props.article.title}</a>
                        <br />

                    </li>
                </ul>
            </div>
        </>
    )
}

export default ArticleCard;