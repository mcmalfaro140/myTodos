import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/header'
import AddTodo from './components/AddTodo'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Do homework',
        completed: false
      },
      {
        id: 3,
        title: 'Meetting at 3',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) =>{
    let newTodo = {
      id: this.state.todos.length+1,
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <AddTodo addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
