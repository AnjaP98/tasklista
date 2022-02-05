import React from "react";
import AllNotes from "./AllNotes"
import InputField from "./InputField";
function NoteForm({ addNote }) {

  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addNote(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>Nova beleška  </label>
      <InputField
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder = "Napisi novu belesku..."
      />  
      <input type="submit" value="Dodaj" />
    </form>
  );
  
}

    export default NoteForm;