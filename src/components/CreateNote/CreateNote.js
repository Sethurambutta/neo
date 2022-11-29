import React,{useState}from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon  from '@material-ui/icons/Add';
import './CreateNote.css';
const CreateNote = (props) => {
  const [isExpanded,setIsExpanded]= useState(false);
  const [Note, setNote] = useState({
    title:"",
    content:"",
  });
  const handlechange = (event)=>{
  const {name,value} =event.target
  setNote((prevNote)=>{
    return{
      ...prevNote,
      [name]:value
    };
  });
  };
  
  const submitNote = (event)=>{
    event.preventDefault();
    props.addNote(Note);
    setNote({
      title:"",
      content:""
    });
    setIsExpanded(false)
  }
  console.log(Note);
  const expand = () =>{
    setIsExpanded(true);
  }

  return (
    <div>
    <form className="create-note">
      {isExpanded && <input 
      name="title" 
      placeholder='Title'  
      type ='text' 
      onChange={handlechange}
      value={Note.title}
      />
      }
      <textarea name="content" 
      placeholder="Take a note.."
       onClick={expand} 
       onChange={handlechange}
       rows={isExpanded ? 3: 1}
       value={Note.content}
       />
      <Zoom in={isExpanded}>
       <Fab onClick={submitNote}>
       <AddIcon/>
       </Fab>
      </Zoom>
      </form>
    </div>
  )
}
export default CreateNote;
