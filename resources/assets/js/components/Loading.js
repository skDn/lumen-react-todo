import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';

var Loading = React.createClass({
    render() {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }
});

export default Loading
