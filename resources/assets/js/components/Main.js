import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaskList from './TaskList';

var Main = React.createClass({
    render() {
        return (
            <div className="container">
                <MuiThemeProvider>
                    <TaskList/>
                </MuiThemeProvider>
            </div>
        )
    }
});

export default Main;
