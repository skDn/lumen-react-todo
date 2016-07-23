import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './components/Main'; // Our custom react component
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import Posts from './components/Main'
import Post from './components/Task'
import NoMatch from './components/NoMatch'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/tasks" component={Main} />
      <Route path="/tasks/:taskId" component={Task} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app'))
