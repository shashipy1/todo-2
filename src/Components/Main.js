import React, { Component } from 'react';
import CreateTask from "./CreateTask";
import TasKList from "./TasKList";



const tasks = [];
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: tasks,
        };
    }

    CreateTask = (task) => {
        if (task.trim() === '') {
            alert("Task not an empty");
            return;
        }
        tasks.push({ task, isComplete: false });
        this.setState({ tasks: tasks });
    }


    toggleTask = (taskId) => {
        const taskItem = tasks[taskId];
        taskItem.isCompleted = !taskItem.isCompleted;
        this.setState({tasks: tasks})
    }


    deleteTask = (taskId) => {
        tasks.splice(taskId, 1)
        this.setState({ tasks, tasks });
    }

    editTask = (taskId, task) => {
        const taskItem = tasks[taskId];
        taskItem.task = task;
        this.setState({tasks: tasks})
    }


    render() {
        return (
            <div className='main'>
                <h1>Todo</h1>
                <div className='content'>
                    <CreateTask CreateTask={this.CreateTask} />
                    <br />
                    <TasKList 
                    tasks={this.state.tasks} 
                    deleteTask = {this.deleteTask}
                    editTask = {this.editTask}
                    toggleTask = {this.toggleTask}
                    />
                </div>
            </div>
        )
    }
}











