import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class CreateThread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        };

        this.postThread = this.postThread.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeContent = this.changeContent.bind(this);
    }

    postThread() {
        axios.post('/threads', {
            title: this.state.title,
            content: this.state.content
        })
        .then(response => {
            this.setState({title: '', content: ''});
            document.getElementById('new-thread-title').value = '';
            document.getElementById('new-thread-content').value = '';
        });
    }

    changeTitle(event) {
        this.setState({title: event.target.value});
    }

    changeContent(event) {
        this.setState({content: event.target.value});
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Create a New Thread</div>

                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="new-thread-title">Title</label>
                            <input id="new-thread-title" className="form-control" onChange={this.changeTitle}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="new-thread-content">Title</label>
                            <textarea id="new-thread-content" className="form-control" onChange={this.changeContent} rows="8"></textarea>
                        </div>
                    </form>
                </div>

                <div className="panel-footer">
                    <button className="btn btn-primary" onClick={this.postThread}>
                        Publish
                    </button>
                </div>
            </div>
        );
    }
}

if (document.getElementById('create-thread')) {
    ReactDOM.render(<CreateThread />, document.getElementById('create-thread'));
}
