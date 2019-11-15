import React, {Component} from 'react';
import './App.css';
import AddTaskForm from "./components/AddTaskForm";
import Task from "./components/Task";
import * as nanoid from "nanoid";

class App extends Component {
    state = {
        textInput: '',
        tasks: [
            {text: 'Add buy milk', id: nanoid()},
            {text: 'Wolk with dog', id: nanoid()},
            {text: 'Add buy dsasd milk',id: nanoid()},
        ],
    };
    changeHendler = (event) => {
        this.setState({textInput: event.target.value})
    };
    addTask = () => {
        const tasks = [...this.state.tasks];
        const newTask = {
            text: this.state.textInput,
            id: nanoid(),
        };
        tasks.push(newTask);
        this.setState({tasks});
    };
    removeTask =(id)=> {
        const taskIndex = this.state.tasks.findIndex(div=> div.id === id);
        const tasks = [...this.state.tasks];
        tasks.splice(taskIndex, 1);
        this.setState({tasks});
    };
    missionAccomplished = (id) => {
        const taskIndex = this.state.tasks.findIndex(div=> div.id === id);
        const tasks = [...this.state.tasks];
        tasks[taskIndex].text = tasks[taskIndex].text;
        this.setState({tasks})
    };

    render() {
        return (
            <div className="App">
                <AddTaskForm
                    onChange={event => {
                        this.changeHendler(event)
                    }}
                    value={this.state.text}
                    onClick={this.addTask}
                    img="https://i.pinimg.com/originals/5d/90/90/5d90905a6810f7d1e6dc7375f08f7ed6.jpg"
                />
                {this.state.tasks.map(task => (
                    <Task
                        txt={task.text}
                        id={task.id}
                        key={task.id}
                        remove={() =>this.removeTask(task.id)}
                        disabled={() =>this.missionAccomplished(task.id)}
                    />
                ))}
            </div>
        )
    }
}


export default App;
