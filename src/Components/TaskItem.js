import React, { Component } from 'react'

export default class TaskItem extends Component {


    constructor(props) {
        super(props);
        this.state = {
            task: this.props.taskItem.task,
            isEditing: false,
        };
    }


    setEditingState = (isEditing) => {
        this.setState({ isEditing: isEditing })
    }

    toggleTask = () => {
        this.props.toggleTask(this.props.id)
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.id)
    }


    handleChange = (e) => {
        this.setState({ task: e.target.value })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editTask(this.props.id, this.state.task);
        this.setState({ isEditing: false })
    };


    render() {
        return (
            <tr>
                {this.state.isEditing ? (
                    <>
                        <td>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.task}
                                    onChange={this.handleChange}
                                    autoFocus />
                            </form>
                        </td>
                        <td>
                            <button type='submit' onClick={this.handleSubmit}>SAVE</button>
                            <button type='button' onClick={() => this.setEditingState(false)}>BACK</button>
                        </td>
                    </>
                ) : (
                    <>
                        <td className='task' onClick={this.toggleTask}>
                            <input type="checkbox" checked={this.props.taskItem.isCompleted}/>
                            <span className={this.props.taskItem.isCompleted ? 'Completed' : 'Not-Completed'} >{this.props.taskItem.task}</span>
                        </td>
                        <td>
                            <button onClick={() => this.setEditingState(true)}>Edit</button>
                            <button onClick={this.deleteTask}>Delete</button>
                        </td>
                    </>
                )}
            </tr>
        )
    }
}
