import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import Delete from 'material-ui/svg-icons/action/delete';
import Comment from 'material-ui/svg-icons/communication/comment';
import Send from 'material-ui/svg-icons/content/send';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CommentTaskForm from './forms/CommentTaskForm';


const styles = {
    completed: {
        textDecoration: "line-through"
    },
    full: {
        width: '100%'
    },
    spaceCards: {
        margin: 20
    },
    rightIcon: {
        float: 'right'
    },
    chip: {
        marginTop: 6
    }
};

var Task = React.createClass({

    getInitialState: function () {
        return {
            nameStyle: (this.props.task.completed) ? styles.completed : null,
            checked: this.props.task.completed,
            commentExpanded: false,
        }
    },

    switchedOn: function () {
        return this.state.nameStyle !== styles.completed;
    },

    handleOnComplete: function () {
        if (this.switchedOn()) {
            this.setState({nameStyle: styles.completed});
            this.setState({checked: true});
        }
        else {
            this.setState({nameStyle: null});
            this.setState({checked: false});
        }
    },

    handleCommentExpandChange: function (expanded) {
        console.log(expanded);
    },

    toggleComments: function () {
        this.setState({commentExpanded: (this.state.commentExpanded) ? false : true})
    },

    render() {
        return (
            <Card style={styles.spaceCards}>

                <div className="fullWidth">
                    <Checkbox
                        label={this.props.task.name}
                        ref="completedCheckbox"
                        style={this.state.nameStyle}
                        checked={this.state.checked}
                        onCheck={this.handleOnComplete}
                    />
                </div>

                <CardText expandable={true}>
                    {this.props.task.description}
                </CardText>

                <Divider/>

                <CardActions>
                    <Chip style={Object.assign({}, styles.rightIcon, styles.chip)}>
                        12
                    </Chip>
                    <IconButton
                        tooltip="Comment"
                        style={styles.rightIcon}
                        onTouchTap={this.toggleComments}
                    >
                        <Comment/>
                    </IconButton>
                </CardActions>
                <Divider/>
                <CommentTaskForm task={this.props.task} expanded={this.state.commentExpanded}/>
            </Card>
        )
    }
});

export default Task;