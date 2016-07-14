import React, { Component } from 'react'

var Error = React.createClass({
    render() {
        return (
            <div>Error: {this.props.error}</div>
        )
    }
});

export default Error
