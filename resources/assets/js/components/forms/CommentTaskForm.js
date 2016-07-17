import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { connect, PromiseState } from 'react-refetch'

const styles = {
    rightIcon: {
        float: 'right'
    }
};

var CommentTaskForm = React.createClass({
    getInitialState: function () {
        return {
            comment: ''
        }
    },

    handleCommentChange: function (e) {
        this.setState({comment: e.target.value});
    },

    resetComment: function () {
        this.setState({comment: ''});
    },

    postComment: function () {
        this.props.postComment(this.getComment());
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

    render()  {
        return (
            <Card expanded={this.props.expanded}>
                <CardActions expandable={true}>
                    <TextField
                        floatingLabelText="Comment"
                        hintText="Write something here .."
                        value={this.state.comment}
                        onChange={this.handleCommentChange}
                        //fullWidth={true}
                        multiLine={true}
                        rowsMax={2}
                    />
                    <RaisedButton label="Send" primary={true} style={styles.rightIcon} onTouchTap={this.postComment}/>
                </CardActions>
            </Card>
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