import React, {PropTypes} from 'react';
import { connect, PromiseState } from 'react-refetch'
import PromiseStateContainer from '../PromiseStateContainer'
import FlatButton from 'material-ui/FlatButton';


var PostTaskForm = React.createClass({

    postTask: function () {
        this.props.postTask({name: this.props.name, description: this.props.description, picture_url: 'no pic yet'});
        this.props.close();
    },

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