import React from 'react';
import ArticleList from '../articles/ArticleList';

class HomePage extends React.Component {
    state = {
        articles: []
    }

    componentDidMount = () => {
        fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-03-02&sortBy=popularity&apiKey=0eba9c03d7f74c069dc0036ce2395c91')
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
            </div>
        );
    }
}

export default HomePage;