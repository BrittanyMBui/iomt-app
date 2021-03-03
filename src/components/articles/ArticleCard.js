import Share from '../Share';

const ArticleCard = (props) => {

    return (
        <>
            <div>
                <ul>
                    <li>
                        <a href={props.article.url} target="_blank" rel="noreferrer">{props.article.title}</a>
                        <br />
                        <img src={props.article.urlToImage} alt={props.article.title}/>
                        <br />
                        <Share article={props.article}/>
                        <br />
                        <div>
                        <i className="fas fa-save"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ArticleCard;