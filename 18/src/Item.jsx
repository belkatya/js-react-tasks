import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {
  handleClick = () => {
    if (this.props.task.state === 'active') {
      this.props.onFinish();
    } else if (this.props.task.state === 'finished') {
      this.props.onActivate();
    }
  };

  render() {
    const {task} = this.props;
    return (
      <div className="row">
        <div className="col-1">{task.id}</div>
        <div className="col">
          {task.state === 'finished' ? (
            <s><a href="#" className="todo-task" onClick={this.handleClick}>
              {task.text}
            </a></s>
          ) : (
            <a href="#" className="todo-task" onClick={this.handleClick}>
              {task.text}
            </a>
          )}
        </div>
      </div>
    );
  }
}

// END
