import React from 'react';
import ReactDOM from 'react-dom';

import {AddTaskButton, SaveTaskButton} from './Button';
import {TaskGrid} from "./TaskGrid";
import {TaskForm} from "./TaskForm";


class TaskList extends React.Component {
    static initialState() {
        return ({
            tasks: [
                { // TODO: send to a service
                    id: 1,
                    name: 'test 1',
                    duration: '22000'
                },
                {
                    id: 2,
                    name: 'test 2',
                    duration: '37200'
                }],
            showTaskForm: false
        });
    }

    constructor() {
        super();
        this.state = TaskList.initialState();
        console.log(this.state);
        this.addTask = this.addTask.bind(this);
        this.appendTotasks = this.appendTotasks.bind(this);
    }

    addTask() {
        console.log('dado el click');
        this.setState({showTaskForm: true})
    };

    appendTotasks(task){
        this.setState((state) => {
            task.id = new Date().getTime();
            state.tasks.push(task);
            state.showTaskForm = false;
            return state;
        });
    }

    render() {
        return (
            <div className='container'>
                <h2>Task List - beta</h2>
                <hr/>
                {this.state.showTaskForm ? <TaskForm onSave={this.appendTotasks}/> : null}
                {!this.state.showTaskForm ? <AddTaskButton doOnClick={this.addTask}/> : null}
                <hr />
                <TaskGrid tasks={this.state.tasks} />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Tasks</h2>
                <TaskList/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));