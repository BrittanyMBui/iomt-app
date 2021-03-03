import ArticleCard from './ArticleCard';

const ArticleList = (props) => {
    return props.articles.map((articleObj) => {
        return <ArticleCard 
            key={articleObj._id} 
            article={articleObj}
        />
    })
};

export default ArticleList;