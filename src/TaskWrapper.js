import React from 'react';
import Task from './Task';
import { changeTask, createTask, deleteTask, fetchAllTasks } from './api';
import debounce from 'lodash.debounce';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import './TaskWrapper.css';


class TaskWrapper extends React.Component {
  state = { tasks: [] };

  componentDidMount() {
    fetchAllTasks().then((tasks) => this.setState({ tasks }))
  }

  saveTask = debounce((task) =>
    changeTask(task), 500
  );

  addTask = () =>
    createTask({})
      .then(
        task => this.setState({ tasks: [...this.state.tasks, task] })
      );

  changeTaskStatus = id => {
    const oldTask = this.state.tasks.find(task => task.id === id);
    const task = { ...oldTask, checked: !oldTask.checked };

    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === id
          ? { ...task, checked: !task.checked }
          : task
      )
    });

    changeTask(task);
  };

  changeTaskDescription = (id, value) => {
    const oldTask = this.state.tasks.find(task => task.id === id);
    const task = { ...oldTask, description: value };
    this.setState({
      tasks: this.state.tasks.map(task =>
        task.id === id
          ? { ...task, description: value }
          : task
      )
    });

    this.saveTask(task);
  };

  removeTask = (id) => {
    deleteTask(id)
      .then(
        this.setState({
          tasks: this.state.tasks.filter(task =>
            task.id !== id
          )
        }));
  };

  render() {
    return (
      <div className="task-wrapper">
        {this.state.tasks.map(task => (
          <Task key={task.id} task={task}
                changeStatus={this.changeTaskStatus}
                changeDescription={this.changeTaskDescription}
                removeTask={this.removeTask}
          />
        ))}
        <Button variant="fab" color="primary" aria-label="Add" onClick={this.addTask}>
          <AddIcon />
        </Button>
      </div>
    )
  }
}


export default TaskWrapper;
