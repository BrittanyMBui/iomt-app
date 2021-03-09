import Share from '../Share';

const ArticleCard = (props) => {

    return (
        <>
            <div>
                <ul>
                    <li>
                        <a href={props.article.url} target="_blank" rel="noreferrer" alt="article">{props.article.title}</a>
                        <br />
                        <img src={props.article.urlToImage} />
                        <br />
                        <Share article={props.article}/>
                        <br />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ArticleCard;