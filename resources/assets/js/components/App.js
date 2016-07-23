import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {

  render() {
    return (
      <div>
        <h1><Link to="/">Home Page</Link></h1>

        <ul>
          <li><Link to="/posts">Tasks</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }

}

export default App
