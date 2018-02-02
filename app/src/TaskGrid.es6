import React from "react";

export class TaskGrid extends React.Component {
    constructor(props){
        super();
        this.props = props;
        this.state = {
            edit: null
        }
    }

    editItem(taskId){
        this.setState({edit: taskId});
    }

    onType(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div>
                <h3>Task List</h3>
                <table>
                    <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Duración</th>
                        <th> - </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.tasks.map((task) => {
                        if (this.state.edit === task.id) {
                            return <tr key={task.id}>
                                <td><input name={'name'} onChange={this.onType.bind(this)} placeholder={'Tarea'}/></td>
                                <td><input name={'duration'} onChange={this.onType.bind(this)} placeholder={'Duración'}/></td>
                                <td><button>guardar</button></td>
                            </tr>
                        } else {
                            return <tr key={task.id}>
                                <td>{task.name}</td>
                                <td>{task.duration}</td>
                                <td>
                                    <button onClick={this.editItem.bind(this, task.id)}>Editar</button>
                                </td>
                            </tr>
                        }
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}