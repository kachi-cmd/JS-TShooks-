import React, {useContext} from 'react';
import NotesContext from '../context/notes-context'
import useMousePosition from '../hooks/useMouseCustomhook'

const Note = ({notes})=>{
const {dispatch}= useContext(NotesContext)
const position = useMousePosition()

    const removeNotes = (title)=>{
        //setNote(notes.filter((notes)=> notes.title !== title ))
        dispatch({ 
          type:'REMOVE_NOTES',
          title
        })
      }

    return (
      <div>
        <h3>{notes.title}</h3>
        <p>{notes.body}</p>
        <p>{position.x} , {position.y}</p>
        <button onClick={() => removeNotes(notes.title)}>X</button>
      </div>
    );
  }
  export {Note as default};