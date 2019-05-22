
import React from 'react';
import TodoList from './todoList.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;