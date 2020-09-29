import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }
  // handlechange function here ()
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  // submit button for tasks (this calls addTask) ()

  submitButton = (evt) => {
    evt.preventDefault();
    this.setState({ item: "" });
    this.props.addTask(evt, this.state.item);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitButton}>
          <input
            type="text"
            name="item"
            value={this.state.item}
            onChange={this.handleChange}
          />
          <button>Add Task</button>
        </form>

      </div>
    );
  }
}

export default TodoForm;
