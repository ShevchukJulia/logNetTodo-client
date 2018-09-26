import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './Task.css';
import classnames from 'classnames';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class Task extends Component {
  render() {
    return (
      <div className="task">
        <Checkbox
          checked={this.props.task.checked}
          onChange={() => this.props.changeStatus(this.props.task.id)}
          value="checkedG"
          classes={{
            root: this.props.classes.root,
            checked: this.props.classes.checked,
          }}
        />
        <TextField
          className={classnames('task-description', {
            'task-description--done': this.props.task.checked
          })}
          value={this.props.task.description}
          onChange={(event) => this.props.changeDescription(this.props.task.id, event.target.value)}
          margin="normal"
          variant="outlined"
          multiline
          rowsMax="5"
          fullWidth
        />
        <IconButton
          color="secondary"
          onClick={() => this.props.removeTask(this.props.task.id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    )
  }
}

export default withStyles(styles)(Task);
