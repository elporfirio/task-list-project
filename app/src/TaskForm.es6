import React from "react";
import {SaveTaskButton} from "./Button";

export class TaskForm extends React.Component {
    constructor(props) {
        super();
        this.props = props;

        this.state = {
            name: 'test',
            duration: 'long'
        };

        // METHODS
        this.onType = this.onType.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    saveTask() {
        this.props.onSave(this.state);
    }

    onType(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                <input name={'name'} onChange={this.onType.bind(this)} placeholder={'Tarea'}/>
                <input name={'duration'} onChange={this.onType.bind(this)} placeholder={'Duración'}/>
                <br />
                <SaveTaskButton doOnClick={this.saveTask}/>
            </div>
        );
    }
}