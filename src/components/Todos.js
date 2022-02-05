
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

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );

}
        export default Todos;