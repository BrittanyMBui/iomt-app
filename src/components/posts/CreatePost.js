import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

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

    handleEditorChange = (body, editor) => {
        this.setState({
            body
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch('https://safe-fortress-45916.herokuapp.com/iomtapi/v1/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state),
        })
        .then((response) => {
            return response.json();
        })
        .then((jsonData) => {
            console.log(jsonData);
            this.props.history.push('/posts')
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
                    <br />
                    <label htmlFor="body">Thoughts go here:</label>
                    <Editor
                        onEditorChange={this.handleEditorChange}
                        value={this.state.body}
                        outputFormat="text"
                        type="text"
                        id="body"
                        name="body"
                        init={{
                            height: 200,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                        }}
                    />
                    <br />
                    <button type="submit">Add Thoughts</button>
                </form>
            </div>

        );
    }
}

export default CreatePost;