import Share from '../Share';

const ArticleCard = (props) => {
    console.log('ARTICLECARD PROPS', {props})
    return (
        <>
            <div>
                <ul>
                    <li>
                        <a href={props.article.url} target="_blank" rel="noreferrer">{props.article.title}</a>
                        <br />
                        <img src={props.article.urlToImage} alt={props.article.title}/>
                        <br />
                        <button>Save</button>
                        <div>
                        <Share article={props.article}/>
                        </div>

                    </li>
                </ul>
            </div>
        </>
    )
}

export default ArticleCard;