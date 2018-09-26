import React, { Component } from 'react';
import './App.css';
import './TaskWrapper';
import TaskWrapper from './TaskWrapper';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">LogNet ToDo</h1>
        <TaskWrapper />
        <CssBaseline />
      </div>
    );
  }
}

export default App;
