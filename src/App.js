import React from "react";

import TodoList from "./components/TodoList"
import TodoForm from './components/TodoForm'

import "./components/Todo.css"

const listItems = [
  {
    name: "Dishes",
    id: "0",
    completed: false,
  },
  {
    name: "Buy Snacks",
    id: "1",
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      listItems: listItems,
    };
  }


    // add task ()
  addTask = (input, item) => {
    input.preventDefault()
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      listItems: [...this.state.listItems, newItem]
    })
  }

  

    // toggle task completed ()

    toggleItem = (itemId) => {
      this.setState({
        listItems: this.state.listItems.map((item) => {
          if (itemId === item.id) {
            return {...item, completed: !item.completed}
          }
          return item;
        })
      })
    }

    // clear completed tasks ()

    clearCompleted = (evt) => {
      evt.preventDefault();
      this.setState({
        listItems: this.state.listItems.filter((item) => !item.completed)
      });
    };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList listItems={this.state.listItems} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
