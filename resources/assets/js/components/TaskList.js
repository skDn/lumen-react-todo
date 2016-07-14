import React, { Component } from 'react';
import { connect, PromiseState } from 'react-refetch';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PromiseStateContainer from './PromiseStateContainer'
import Task from './Task';
import AddTaskForm from './forms/AddTaskForm'

const floatingButtonStyle = {
    float: 'right'
};

var TaskList = React.createClass({

    handleFloatingAction: function () {
        this.refs.addTaskFrom.handleOpen();
    },

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
                    <FloatingActionButton
                        mini={true}
                        style={floatingButtonStyle}
                        onTouchTap={this.handleFloatingAction}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                    <AddTaskForm ref="addTaskFrom"/>
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