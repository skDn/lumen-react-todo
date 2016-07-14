import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var Task = React.createClass({
    render() {
        return (
            <Card
                style={{
                    margin: 20
                }}
            >
                <CardHeader
                    title={this.props.task.name}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {this.props.task.description}
                </CardText>
                <CardActions expandable={true}>
                    <FlatButton label="Action1"/>
                    <FlatButton label="Action2"/>
                </CardActions>
            </Card>
        )
    }
});

export default Task;