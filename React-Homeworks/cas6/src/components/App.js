import React from 'react';
import {Todos} from './Todos';

export class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      todos: [
        {id:1, todo: "react domasna"},
        {id:2, todo: "tus"},
        {id:3, todo: "krevet"},
      ],
      newTodo: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addTodo = () => {
    if(this.state.newTodo !== "") {
      var objekt = {
        id: this.state.todos.length + 1,
        todo: this.state.newTodo,
      }
      this.setState({
        todos: [...this.state.todos,objekt],
        newTodo:""
      })
    }
    else {
      alert("vnesi")
    }
  }

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => (todo.id !== id))
      ]
    })
  }



  render(){
    return(
      <div id = "app">
        <input
          type = "text"
          onChange = {this.handleChange}
          placeholder = "Add new"
          name = "newTodo"
          value= {this.state.newTodo}
        />
        
        <button onClick = {this.addTodo}>
          + Add Todo
        </button>

        <Todos 
          todoList = {this.state.todos}
          delTodo = {this.delTodo}

        />
      </div>
    )
  }
}