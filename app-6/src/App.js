import React, { Component } from 'react'; 

import './App.css';
import Todo from './Components/Todo';

class App extends Component {
  constructor(){
    super();

    this.state= {
      tasksArray:[],
      userInput: ''
    };

    // this.tasksArray= this.tasksArray.bind(this);
  }
    handleChange(val){
      this.setState({ userInput : val })
    }

    addTask(){
      var tasksArray= this.state.tasksArray;
      var userInput= this.state.userInput;
      tasksArray.push(userInput);
      this.setState({ tasksArray : tasksArray })
    }

  render() {
    return (
      <div className="App">
        <input onChange= { (e)=> this.handleChange(e.target.value) } />
        <button onClick= { ()=> this.addTask(this.state.userInput) }> Add Todo</button>
        <Todo displayTasks= {this.state.tasksArray}/>
      </div>
    );
  }
}

export default App;


//input field
//task list
//onchange event... updates input...
//button... onClick event... updates list
//Todo component takes in prop equals the current/updated list
