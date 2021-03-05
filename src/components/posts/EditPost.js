import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class EditPost extends React.Component {
    state = {
        title: '',
        body: '',
    }

    componentDidMount() {
        fetch(`https://safe-fortress-45916.herokuapp.com/iomtapi/v1/posts/${this.props.match.params.id}`, {
        })
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
        });
      };
    
    handleEditorChange = (body, editor) => {
        this.setState({
            body
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://safe-fortress-45916.herokuapp.com/iomtapi/v1/posts/${this.props.match.params.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state),
        })
          .then(() => this.props.history.push('/posts'))
          .catch((err) => console.log(err));
      };

    render () {
        return (
            <div>
                <h1>Edit {this.state.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
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

export default EditPost;