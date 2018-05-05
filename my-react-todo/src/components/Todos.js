import React, {Component} from 'react'
import Todo from './Todo'

let todos = this.props.todos.map( (todo) => {

class Todos extends Component {
  render(){
      return (
        <Todo
          key={todo._id}
          todo={todo}
          editingTodoId={this.props.editingTodoId}
          onEditTodo={this.props.onEditTodo}
          onDeleteTodo={this.props.onDeleteTodo}
          onUpdateTodo={this.props.onUpdateTodo}
        />
      )
    }
  }
})



export default Todos