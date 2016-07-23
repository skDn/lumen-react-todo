import React from 'react'
import {connect, PromiseState} from 'react-refetch'
import { Link } from 'react-router'
import Loading from './Loading'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NotLoggedIn from './NotLoggedIn';

var App = React.createClass({
  getInitialState: function () {
    return {
      logged: false
    }
  },

  onLoggedIn: function () {
      this.setState({logged: true});
      this.forceUpdate();
  },

  render() {
    const { logFetch } = this.props;
    const allFetches = PromiseState.all(logFetch);

    if (logFetch.pending) {
      return (
        <MuiThemeProvider>
          <div className='centerLoading'>
            <Loading/>
            <div>Loading..</div>
          </div>
        </MuiThemeProvider>
      );
    } else if (logFetch.fulfilled) {
      return (
        <MuiThemeProvider>
          {(this.state.logged || logFetch.value.auth) ? 
              <h1>LoggedIn</h1> : 
              <NotLoggedIn login={this.onLoggedIn}/>
          }
        </MuiThemeProvider>
      );
    }
  }
});

export default connect(props => ({
  logFetch: '/auth/log'
}))(App)
