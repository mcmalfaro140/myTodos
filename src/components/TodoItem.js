import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return{
      background: '#f4f4f4',
      padding: '5px',
      borderBottom: '1px #ccc solid',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
      return (
          <div style={this.getStyle()}>
             <p>
               <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}></input>
              {this.props.todo.title}
              <button style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.todo.id)}>x</button>
             </p> 
          </div>
      )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

let btnStyle = {
  background: '#ff0000',
  color: '#fff',
  padding: '5px 10px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}



export default TodoItem;
