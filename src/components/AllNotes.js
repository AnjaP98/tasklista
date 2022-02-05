import React from "react";
import NoteForm from './NoteForm';
import Note from './Note';
import { useState } from "react";

function AllNotes(){

    const initialData = [{ text: '... ' }];

    const [notes, setNotes] = useState(initialData);
    //const notes = props => props.data.map(note => <div>{note.text}</div>);


    // const [notes, setNotes] = React.useState([
    //     {
    //       text: "Prva..",
          
    //     },
    //     {
    //       text: "Drugi task...",
          
    //     },
    //     {
    //       text: "Treci task...",
        
    //     }
    //   ]);


    const addNote = text => {
        const newNotes = [...notes, { text }];
        setNotes(newNotes);
      };

      return (
        <div className="app">
           <NoteForm addNote={addNote} />
           <br></br>
          <div className="notes-list">
            {notes.map((note, index) => (
              <Note
                
                key={index}
               
                note={note}
               
              />
            ))}
           
          </div>
        </div>
      );


}   export default AllNotes;