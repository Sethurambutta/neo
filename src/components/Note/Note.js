import React from 'react'
import "./Note.css";
import  DeleteIcon  from '@material-ui/icons/Delete';
// import AddIcon  from '@material-ui/icons/Add';
const Note = (props) => {
  const handleClick = ()=>{
    props.DeleteNote(props.id)
  }
  return (
    <div className ="Note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
      <DeleteIcon />
      </button>
    </div>
  )
}

export default Note;
