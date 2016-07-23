import React from 'react'
import AppBar from 'material-ui/AppBar'
import Formsy from 'formsy-react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { connect, PromiseState } from 'react-refetch'
import {
    FormsyText,
} from 'formsy-material-ui/lib';

const centerTitle = {
    textAlign: 'center'
};

var NotLoggedIn = React.createClass({
    getInitialState: function() {
        return {
            canSubmit: false,
            submitted: [],
        };
    },
    errorMessages: {
        wordsError: "Please only use letters",
        numericError: "Please provide a number",
        urlError: "Please provide a valid URL",
    },

    styles: {
        paperStyle: {
            width: 300,
            margin: 'auto',
            padding: 20,
            marginTop: 20,
        },
        submitStyle: {
            marginTop: 32,
        },
    },

    enableButton: function () {
        this.setState({
            canSubmit: true,
        });
    },

    disableButton: function () {
        this.setState({
            canSubmit: false,
        });
    },

    submitLoginForm: function (data) {
        this.props.postLoginForm(data);
        this.waitForResponse();
        // TODO: add check if actually logged in.
        this.props.login();
    },

    waitForResponse: function () {
        if(typeof this.props.postLoginFormResponse !== "undefined"){
        }
        else{
            setTimeout(this.waitForResponse, 250);
        }
    },


    notifyFormError(data) {
        console.error('Form error:', data);
    },

    render() {

        let {
            paperStyle,
            switchStyle,
            submitStyle
        } = this.styles;
        let {
            wordsError,
            numericError,
            urlError
        } = this.errorMessages;

        return (
            <div>
                <AppBar
                    title="Title"
                    titleStyle={centerTitle}
                >
                </AppBar>
                <div className='container'>
                    <Paper style={paperStyle}>
                      <Formsy.Form
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                        onValidSubmit={this.submitLoginForm}
                        onInvalidSubmit={this.notifyFormError}
                      >
                        <FormsyText
                          name="email"
                          // validations="isWords"
                          // validationError={wordsError}
                          required
                          hintText="email"
                          floatingLabelText="Email"
                        />
                        <FormsyText
                          name="password"
                          type="password"
                          validations="isWords"
                          validationError={wordsError}
                          required
                          hintText="password"
                          floatingLabelText="password"
                        />

                        <RaisedButton
                          style={submitStyle}
                          type="submit"
                          label="Submit"
                          disabled={!this.state.canSubmit}
                        />
                      </Formsy.Form>
                    </Paper>
                    {this.state.submitted}
                </div>
            </div>
        )
    }
    
});

export default connect(props => ({
    postLoginForm: user => ({
        postLoginFormResponse: {
            url: `/auth/login`,
            method: 'POST',
            body: JSON.stringify(user)
        }
    })
}))(NotLoggedIn)