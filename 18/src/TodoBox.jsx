import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputText: "",
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = async () => {
    const url = routes.tasksPath();
    const response = await axios.get(url);
    this.setState({ tasks: response.data });
  };

  addTask = async (taskText) => {
    const url = routes.tasksPath();
    const response = await axios.post(url, { text: taskText });
    const newTask = response.data;
    this.setState(prevState => ({
      tasks: [newTask, ...prevState.tasks],
    }));
  };

  finishTask = async (taskId) => {
    const url = routes.finishTaskPath(taskId);
    const response = await axios.patch(url);
    const finishedTask = response.data;
    const index = this.state.tasks.findIndex(task => task.id === taskId);
    const updatedTasks = update(this.state.tasks, {
      [index]: { $set: finishedTask }
    });
    this.setState({ tasks: updatedTasks });
  };

  activateTask = async (taskId) => {
    const url = routes.activateTaskPath(taskId);
    const response = await axios.patch(url);
    const activatedTask = response.data;
    const index = this.state.tasks.findIndex(task => task.id === taskId);
    const updatedTasks = update(this.state.tasks, {
      [index]: { $set: activatedTask }
    });
    this.setState({ tasks: updatedTasks });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const taskText = this.state.inputText;
    if (taskText) {
      const taskTextTrim = taskText.trim();
      if (taskTextTrim.length > 0){
        this.addTask(taskTextTrim);
        this.setState({inputText: ""});
      }
    }
  }

  handleChange = (e) => {
      this.setState({inputText: e.target.value});
  }

  checkTasks = (stateValue) => {
    const {tasks} = this.state;
    return tasks.some(task => task.state === stateValue);
  }

  render() {
    const {inputText, tasks} = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={inputText}
                required
                className="form-control me-3"
                placeholder="I am going..."
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>

        {this.checkTasks('active') && (
          <div className="todo-active-tasks">
            {tasks
              .filter(task => task.state === 'active')
              .sort((a, b) => parseInt(b.id) - parseInt(a.id))
              .map(task => (
                <Item
                  key={task.id}
                  task={task}
                  onFinish={() => this.finishTask(task.id)}
                />
              ))
            }
          </div>
        )}

        {this.checkTasks('finished') && (
          <div className="todo-finished-tasks">
            {tasks
              .filter(task => task.state === 'finished')
              .sort((a, b) => parseInt(b.id) - parseInt(a.id))
              .map(task => (
                <Item
                  key={task.id}
                  task={task}
                  onActivate={() => this.activateTask(task.id)}
                />
              ))
            }
          </div>
        )}
      </div>
    );
  }
}

export default TodoBox;
// END
