import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
      return (
        <div>
            <table class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">Completed</th>
                <th scope="col">Task</th>
                <th scope="col" style={{float:'right'}}>Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.props.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo={this.props.delTodo}/>
                    ))}
            </tbody>
            </table>
        </div>
      )
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}




export default Todos;
