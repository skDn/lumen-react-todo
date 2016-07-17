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

    getInitialState: function () {
        return {
            tasks: [],
            id: Math.floor((Math.random() * 1000) + 1)
        }
    },

    handleFloatingAction: function () {
        this.refs.addTaskFrom.handleOpen();
    },

    onTaskAdded: function (task) {
        // TODO: pass valid key
        this.state.tasks.push(
            <Task task={task} key={this.state.id}/>
        );
        this.forceUpdate();
        this.setState({id: this.state.id + 1});
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
                    <AddTaskForm ref="addTaskFrom" onTaskAdded={this.onTaskAdded}/>
                </CardHeader>
                <PromiseStateContainer
                    ps={PromiseState.all([this.props.tasksFetch])}
                    onFulfillment={([tasks]) => {
                      return (
                        <div>
                          {tasks.map((task) => {
                            task['completed'] = false;
                            return (
                                 <Task task={task} key={task.id}/>
                            )
                          })}
                        </div>
                      )
                    }}
                />
                {this.state.tasks}
            </Card>
        )
    }
});

export default connect(props => ({
    tasksFetch: '/api/task'
}))(TaskList)