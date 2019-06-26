import React, {Component} from 'react';
import Todos from './components/Todos'
import Header from './components/header'
import AddTodo from './components/AddTodo'


class App extends Component {
  state = {
    todos: [
      // {
      //   id: 1,
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: 'Do homework',
      //   completed: false
      // },
      // {
      //   id: 3,
      //   title: 'Meetting at 3',
      //   completed: false
      // },
    ]
  }

//This method is called once all the children elements and components are mounted
  componentDidMount(){
    this.getTodos();
  }

  //fetching information from my api
  getTodos = () => {
    fetch('https://todosmisael.herokuapp.com/misaelAPI/get')
    .then(response => response.json())
    .then(response => this.setState({todos: response.body})) //setting state values to data from api
    .catch(err => console.log(err))
  }

  apiCalls = (type, value) => {
    fetch(`https://todosmisael.herokuapp.com/${type}/${value}`)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.log(err))
    this.getTodos();
  }

  //set completed to true https://cors.io/?
  markComplete = (id) => {
    this.apiCalls('misaelAPI/update',id)
    // this.setState({ todos: this.state.todos.map(todo => {
    //   if(todo.id === id) {
    //     todo.completed = !todo.completed
    //   }
    //   return todo
    // })})
  }

  //delete task 
  delTodo = (id) => {
    this.apiCalls('misaelAPI/delete',id)
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // add new task
  addTodo = (title) =>{
    this.apiCalls('addnewtodo', title);
    // let newTodo = {
    //   id: this.state.todos.length+1,
    //   title: title,
    //   completed: false
    // }
    // this.setState({todos: [...this.state.todos, newTodo]})
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <div class="container">
          <br></br>
          <AddTodo addTodo={this.addTodo}/>
          <br></br>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
