import React, {PropTypes} from 'react';
import { connect, PromiseState } from 'react-refetch'
import PromiseStateContainer from '../PromiseStateContainer'
import FlatButton from 'material-ui/FlatButton';


var PostTaskForm = React.createClass({
    propTypes : {
        postTaskResponse: PropTypes.instanceOf(PromiseState)
    },

    postTask: function () {
        this.props.postTask(this.props.task);
        // does not work for some reason, raised an issue on the github page
        //this.checkResponse();
        this.props.onTaskAdded(this.props.task);
        this.props.close();
    },

    //checkResponse: function () {
    //    console.log(this.props.postTaskResponse);
    //    console.log(this.postTaskResponse);
    //},

    render() {
        return (
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.postTask}
            />
        )
    }
});

export default connect(props => ({
    postTask: task => ({
        postTaskResponse: {
            url: `/api/task`,
            method: 'POST',
            body: JSON.stringify(task)
        }
    })
}))(PostTaskForm)