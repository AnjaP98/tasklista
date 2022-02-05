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
      <button type="submit"  value="Submit">+</button>
    </form>
  );
}

    export default TodoForm;
