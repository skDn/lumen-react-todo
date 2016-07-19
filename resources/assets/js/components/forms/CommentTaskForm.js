import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { connect, PromiseState } from 'react-refetch'
import CommentList from '../CommentList'
import Comment from '../Comment';


const styles = {
    rightIcon: {
        float: 'right'
    },
    zeroWidth: {
        width: ''
    },
    hideElement: {
        display: "none"
    }
};

var CommentTaskForm = React.createClass({
    getInitialState: function () {
        return {
            comment: '',
            comments: [],
            id: Math.floor((Math.random() * 10000) + 1)
        }
    },

    handleCommentChange: function (e) {
        this.setState({comment: e.target.value});
    },

    resetComment: function () {
        this.setState({comment: ''});
    },

    postComment: function () {
        // post the comment
        this.props.postComment(this.getComment());
        // update UI
        this.onCommentAdded(this.getComment());
        // remove text from comment form field
        this.resetComment();
        // does not work for some reason, raised an issue on the github page
        //this.checkResponse();
        //this.props.onTaskAdded(this.props.task);
    },

    getComment: function () {
        return {
            task_id: this.props.task.id,
            comment: this.state.comment
        }
    },

    onCommentAdded: function (comment) {
        // TODO: pass valid key
        this.state.comments.unshift(
            <Comment key={this.state.id} comment={comment} animated={true}/>
        );
        this.forceUpdate();
        this.setState({id: this.state.id + 1});
    },

    render()  {
        return (
            <div style={(this.props.expanded) ? null : styles.hideElement}>
                <div className="row">
                    <TextField
                        floatingLabelText="Comment"
                        hintText="Write something here .."
                        value={this.state.comment}
                        onChange={this.handleCommentChange}
                        //fullWidth={true}
                        className="col-xs-9 col-md-9 m-l-1"
                        multiLine={true}
                        rowsMax={2}
                        style={styles.zeroWidth}
                    />
                    <FlatButton label="Send" primary={true} style={styles.rightIcon} onTouchTap={this.postComment}
                                className="col-xs-2 col-md-2"/>
                </div>
                <div className="row">
                    <CommentList task={this.props.task} comment={this.getComment()} ref='commentList' newComments={this.state.comments}/>
                </div>
            </div>
        )
    }
});

export default connect(props => ({
    postComment: comment => ({
        postCommentResponse: {
            url: `/api/comment`,
            method: 'POST',
            body: JSON.stringify(comment)
        }
    })
}))(CommentTaskForm);