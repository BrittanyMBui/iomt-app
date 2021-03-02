import React from 'react';

class SignUp extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        posts: [],
        content: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch('http://localhost:4000/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            console.log(jsonData);
            this.props.history.push('/')
        })
        .catch((err) => console.log(err));
    };


    render() {
        return (
            <div>
                <h1>Create an IoMT Account</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.username}
                        type="text"
                        id="username"
                        name="username"
                    />
                    <br />
                    <label htmlFor="email">Email</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.email}
                        type="email"
                        id="email"
                        name="email"
                    />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.password}
                        type="password"
                        id="password"
                        name="password"
                    />
                    <br />
                    <button type="submit">Create Account</button>
                </form>
            </div>
        );
    }
};

export default SignUp;