import React from "react";
import InputField from "./InputField";
import Todos from "./Todos"
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>Novi task  </label>
      <InputField
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />  
      <input type="submit" value="Dodaj" />
    </form>
  );
}

    export default TodoForm;