import React from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import style from './style';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }

    loadCommentsFromServer() {
        axios.get(this.props.url)
            .then(res => {
                this.setState({ data: res.data });
            })
    }

    handleCommentSubmit(comment){
        // add post request
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    render() {
        return (
            <div style={ style.commentBox}>
                <h2>Comments:</h2>
                <CommentList data ={ this.state.data }/>
                <CommentForm onCommentSubmit={ this.handleCommentSubmit }/>
            </div>
        );
    }
}

export default CommentBox;