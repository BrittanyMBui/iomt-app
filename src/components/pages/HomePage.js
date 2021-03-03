import React from 'react';
import { Link } from 'react-router-dom';
import ArticleList from '../articles/ArticleList';

class HomePage extends React.Component {
    state = {
        articles: []
    }

    componentDidMount = () => {
        fetch('https://newsapi.org/v2/everything?q=(gender AND technology)&from=2021-03-01&sortBy=popularity&apiKey=0eba9c03d7f74c069dc0036ce2395c91')
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData)
            this.setState({
                articles: jsonData.articles,
            })
        })
        .catch((err) => console.log(err))
    };

    render() {
        return (
            <div>
                <h1>Welcome Back, usernamegoeshere</h1>
                <ArticleList articles={this.state.articles} />
                <Link to='/newpost'>
                    <i className="fas fa-pen-alt"></i>
                </Link>
            </div>
        );
    }
}

export default HomePage;