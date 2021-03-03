import React from 'react';

class CreatePost extends React.Component {
    state = {
        title: new Date(),
        body: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch('http://localhost:4000/iomtapi/v1/posts', {
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
            this.props.history.push('/home')
        })
        .catch((err) => console.log(err))
    };

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        onChange={this.handleChange}
                        value={this.state.title}
                        type="text"
                        id="title"
                        name="title"
                    />
                    <br />
                    <label htmlFor="body">Thoughts go here:</label>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.body}
                        type="text"
                        id="body"
                        name="body"
                    />
                    <br />
                    <button type="submit">Add Thoughts</button>
                </form>
            </div>

        );
    }
}

export default CreatePost;