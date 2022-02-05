import React from "react";

function Note({ note, index, text }) {
  return (
    <div
      className="todo"
     
    >

      {note.text}

      </div>
     
  );
}
  export default Note;