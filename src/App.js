import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  let [note, setNote] = useState({
    title: "",
    content: ""
  })
  let [notes, setNotes] = useState([{title: "Example title", content: "Example content"},
  {title: "Second example title", content: "Second example content"}])
  let [editState, setEditState] = useState(null)

  function createNote(event,note) {
    event.preventDefault()
    if (note.title !== "" && note.content !== "") {
      if (editState === null) {
        setNotes((prevValue) => {
          return (
            [note,...prevValue]
          )
        })
      } else {
        setNotes((prevValue) => {
          prevValue[editState] = note
          return (
            prevValue
          )
        })
        setEditState(null)
      }
      setNote({
        title: "",
        content: ""
      })
    }
  }

  function renderNotes() {
    return (
      notes.map((element,index) => {
        return (
          <Note key={index} id={index} note={element} deleteNote={deleteNote} updateNote={updateNote} />
        )
      })
    )
  }

  function updateNote(event,id,note) {
    setEditState(id)
    setNote(note)
  }

  function deleteNote(event,id) {
    setNotes((prevValue) => {
      return (
        prevValue.filter((element,index) => {
          return (
            index !== id
          )
        })
      )
    })
  }

  function handleChange(event) {
    let {name,value} = event.target

    setNote((prevValue) => {
      return (
        {
          ...prevValue,
          [name]: value
        }
      )
    })
  }

  return (
    <div>
      <Header />
      <CreateArea note={note} editState={editState} createNote={createNote} handleChange={handleChange} />
      {renderNotes()}
      <Footer />
    </div>
  );
}

export default App;
