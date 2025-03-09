import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={(event) => props.createNote(event,props.note)}>
        <input onChange={props.handleChange} value={props.note.title} name="title" placeholder="Title" />
        <textarea onChange={props.handleChange} value={props.note.content} name="content" placeholder="Take a note..." rows="3" />
        <button>{props.editState === null ? "Create" : "Update"}</button>
      </form>
    </div>
  );
}

export default CreateArea;
