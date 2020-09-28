import React from "react";

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

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>
        <button>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;
