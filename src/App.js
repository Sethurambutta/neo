import './App.css';
import React,{useState} from 'react';
import Header from './components/header/Header';
import Note from './components/Note/Note';
import Footer from './components/Footer/Footer';
import CreateNote from './components/CreateNote/CreateNote';
//import  DeleteIcon  from '@material-ui/icons/Delete';

//import  DeleteIcon  from '@mui/icons-material/Delete';
//import {SettingsRemoteSharp}  from '@material-ui/icons';
// import HighlightIcon from '@mui/icons-material/Highlight';
function App() {
  const [notes,setNote] = useState([ ]);

  const addNote = (newNote)=>{
  setNote((prevNotes)=>{
      return [...prevNotes,newNote]
  })
  }
 
  const DeleteNote = (id)=>{
    setNote((prevNotes)=>{
      return prevNotes.filter((NoteItem,index)=>{
        return index!==id

      })
    })
  }
  return (
    <div className="App">
    <Header/>
    <CreateNote addNote={addNote}/>
    {notes.map((note,index)=>{
    return <Note  id={index} title={note.title} content={note.content} DeleteNote={DeleteNote}/>    
    })}
    <Footer/>
    </div>
  );
  }
export default App;