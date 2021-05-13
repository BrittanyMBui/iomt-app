import React from 'react';
import ArticleList from '../articles/ArticleList';
import UserProfile from '../auth/UserProfile';

class HomePage extends React.Component {
    state = {
        articles: []
    }

    

    componentDidMount = () => {
        const key = '0eba9c03d7f74c069dc0036ce2395c91';
        fetch(`https://newsapi.org/v2/everything?q=(underrepresented AND technology)&from=2021-05-13&sortBy=popularity&excludeDomains=vice.com&apiKey=${key}`)
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData);
            this.setState({
                articles: jsonData.articles,
            })
        })
        .catch((err) => console.log(err))
    };

    render() {
        return (
            <div className="home-page">
                <UserProfile />
                <ArticleList articles={this.state.articles} />
            </div>
        );
    }
}

export default HomePage;