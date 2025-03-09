import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.note.title}</h1>
      <p>{props.note.content}</p>
      <button onClick={(event) => props.deleteNote(event,props.id)}>Delete</button>
      <button onClick={(event) => props.updateNote(event,props.id,props.note)}>Edit</button>
    </div>
  );
}

export default Note;

