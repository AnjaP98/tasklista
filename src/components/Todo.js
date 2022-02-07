import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
 <br></br>
      <div>
      
        <button onClick={() => removeTodo(index)}>x Zavrseno</button>
      </div>
    </div>
  );
}
  export default Todo;
