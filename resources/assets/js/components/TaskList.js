import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import PromiseStateContainer from './PromiseStateContainer'
import Task from './Task';
import {GridList} from 'material-ui/GridList';

var TaskList = React.createClass({

    render() {
        return (
            <Card
                expanded={true}
                style={{
                    paddingBottom: 10
                }}
            >
                <CardHeader
                    title="Tasks"
                    style={{
                    fontWeight: 'bold',
                    backgroundColor: '#EEEEEE'
                  }}
                >
                </CardHeader>
                <PromiseStateContainer
                    ps={PromiseState.all([this.props.tasksFetch])}
                    onFulfillment={([tasks]) => {
                      return (
                        <div>
                          {tasks.map((task) => {
                            return (
                                 <Task task={task} key={task.id}/>
                            )
                          })}
                        </div>
                      )
                    }}
                />
            </Card>
        )
    }
});

export default connect(props => ({
    tasksFetch: '/api/task'
}))(TaskList)