import React from 'react';

class EditPost extends React.Component {
    state = {
        title: '',
        body: '',
    }

    componentDidMount() {
        fetch(`http://localhost:4000/iomtapi/v1/posts/${this.props.match.params.id}`)
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData)
            this.setState(jsonData)
        })
        .catch((err) => console.log(err))
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/iomtapi/v1/posts/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application.json',
            },
            body: JSON.stringify(this.state)
        })
        .then(() => this.props.history.push('/posts'))
        .catch((err) => console.log(err))
    };

    render () {
        return (
            <div>
                <h1>Edit {this.state.title}</h1>
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
                    <button type="submit">Edit Thoughts</button>
                </form>
            </div>
        );
    }
}

export default EditPost;