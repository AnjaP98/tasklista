
import Todo from './Todo';
import TodoForm from './TodoForm';
import React from "react";

import { useState } from "react";

function Todos(){

  const [todos, setTodos] = React.useState([
    {
      text: "Prvi task...",
      isCompleted: false
    },
    {
      text: "Drugi task...",
      isCompleted: false
    },
    {
      text: "Treci task...",
      isCompleted: false
    }
  ]);
  
  function toggleTodoCompleted(id) {
    const updatedTodos = todos.map(todo => {
      
      if (id === todo.id) {
        
        return {...todo, isCompleted: !todo.complete}
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  const todoList = todos.map(todo => (
    <Todo
        id={todo.id}
        name={todo.name}
        completed={todo.isCompleted}
        key={todo.id}
        toggleTodoCompleted={toggleTodoCompleted}
      />
    )
  );

  

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
const preostalo = `Ukupno preostalih taskova: ${todoList.length}`;
  return (
    <div className="app">
    
    <h3 id="list-heading">{preostalo}</h3> // koliko je preostalo taskova
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
           
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );

}
        export default Todos;
