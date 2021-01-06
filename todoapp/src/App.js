import React, { Component} from 'react';
import Todos from "./Todos";
import AddTodo from "./AddForm"

class App extends Component {

  state = {
    todos: [
      {id:1, content:"Buy Milk"},
      {id:2, content:"Play Watch Dogs"}
    ]
  }

  addTodo = (todo) =>{
    todo.id = Math.random()*10
    let todos = [...this.state.todos,todo]
    this.setState({todos:todos})
  }

  deleteTodo = (id) =>{
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({ todos })
  }
  render(){
    return(
      <div className="todo-app container">
        <h1 className ="center blue-text">ToDo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;