import React, { Component } from 'react'


export default class CreateTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: '',
        };
    }


    handleChange =(e) => {
        this.setState({task: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.CreateTask(this.state.task);
        this.setState({task:''});

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                placeholder='enter task' 
                value={this.state.task} 
                onChange={this.handleChange} autoFocus />
                <button type='submit'>Add</button>
            </form>
        )
    }
}
