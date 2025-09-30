import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            inputValue: "",
        };
    }

    handleRemove = (task) => (e) => {
        e.preventDefault();
        const newTasks = this.state.tasks.filter(item => item !== task);
        this.setState({tasks: newTasks});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = this.state.inputValue;
        if (newTask) {
            const task = {id: uniqueId(), text: newTask};
            this.setState({tasks: [task, ...this.state.tasks], inputValue: ""});
        }
  };

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    render() {
        const {tasks, inputValue} = this.state;

        return(
            <div>
                <div className="mb-3">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                    <div className="me-3">
                        <input
                        type="text"
                        value={inputValue}
                        required=""
                        className="form-control"
                        placeholder="I am going..."
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                {tasks.length > 0 && (
                    <div>
                        {tasks.map((task) =>
                            <Item key={task.id} onRemove={this.handleRemove} task={task} />
                        )}
                    </div>
                )}
                
            </div>
        )
    }

}
// END
