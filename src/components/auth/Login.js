import React from 'react';

class SignUp extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        posts: [],
        content: []
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const requestBody = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        if (this.state.new) {
            fetch('localhost:4000/users/signup', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            })
            .then((response) => {
                return response.json();
            })
            .then((jsonData) => {
                console.log(jsonData);
            })
        }

    };


    render() {
        return (
            <div>
                <h1>Create an IoMT Account</h1>
            </div>
        );
    }
}

export default SignUp;