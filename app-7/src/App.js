import React, { Component } from 'react';

import './App.css';
import NewTask from './Component/NewTask';
import List from './Component/List';

class App extends Component {
  constructor(){
  super();

  this.state={
  todoList: []
  };
  
  this.handleListUpdate= this.handleListUpdate.bind(this);
}



handleListUpdate(task){
  this.setState({ todoList: [ ...this.state.todoList, task ]
  });
}

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={ this.handleAddTask } />
        <List tasks={ this.state.list } />
      </div>
    );
  }
}

export default App;
