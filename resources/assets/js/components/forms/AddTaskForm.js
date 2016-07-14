import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import PostTaskForm from './PostTaskForm'

var AddTaskForm = React.createClass({

    getInitialState: function () {
        return {
            open: false,
            name: '',
            description: '',
            picture_url: 'no picture yet'

        };
    },

    handleOpen: function () {
        this.setState({open: true});
    },

    handleClose: function () {
        this.setState({open: false});
    },

    handleNameFieldChange: function (e) {
        this.setState({name: e.target.value});
    },

    handleDescriptionFieldChange: function (e) {
        this.setState({description: e.target.value});
    },

    render () {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <PostTaskForm
                name={this.state.name}
                description={this.state.description}
                close={this.handleClose}
            />
        ];
        return (
            <Dialog
                title="Add a task"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                <TextField
                    hintText="Please write the name here..."
                    floatingLabelText="Name your task"
                    value={this.state.name}
                    onChange={this.handleNameFieldChange}
                    name="name"
                /><br />
                <TextField
                    hintText="Please write the description here..."
                    floatingLabelText="Can you describe it?"
                    value={this.state.description}
                    onChange={this.handleDescriptionFieldChange}
                /><br />
            </Dialog>

        )
    }
});

export default AddTaskForm