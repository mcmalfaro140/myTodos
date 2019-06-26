import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return{
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
      return (
        <tr>
          <th ><input type="checkbox" checked={this.props.todo.completed} onChange={this.props.markComplete.bind(this, this.props.todo.id)}></input></th>
          <td style={this.getStyle()}>{this.props.todo.task}</td>
          <td> <button class="btn btn-danger" style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.todo.id)}>X</button></td>
          
        </tr>
          // <div style={this.getStyle()}>
          //    <p>
          //      <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}></input>
          //     {this.props.todo.title}
          //     <button class="btn btn-danger" style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.todo.id)}>X</button>
          //    </p> 
          // </div>
      )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

let btnStyle = {
  borderRadius: '50%',
  float: 'right',
 
}



export default TodoItem;
