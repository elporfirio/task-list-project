import React from 'react';
import ReactDOM from 'react-dom';

export class AddTaskButton extends React.Component {
    render() {
        return <button onClick={this.props.doOnClick}>Crear Tarea</button>
    }
}

export class SaveTaskButton extends React.Component {
    render() {
        return <button onClick={this.props.doOnClick}>Guardar Tarea</button>
    }
}