import React, {useEffect, useReducer} from 'react';
import AddNoteForm from './AddNoteForm'
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import NotesContext from '../context/notes-context'

const App = ()=>{
    // const [notes, setNote]= useState([])
    const [notes, dispatch]= useReducer(notesReducer, [])
    
     
   
     useEffect(()=>{
        const json = localStorage.getItem('notes');
        const notesData = JSON.parse(json);
       if (notesData) { 
         dispatch({type:'POPULATE_NOTES', notes:notesData})
         //setNote(notesData);
         }
      }, [])
      useEffect(()=>{
          const jon  = JSON.stringify(notes);
          localStorage.setItem('notes', jon);
      }, [notes])
   
     return(
     <NotesContext.Provider value={{notes, dispatch}} >
     {console.log({notes})}
       <h1>Notes</h1>
       <NoteList />
       <AddNoteForm  />
     </NotesContext.Provider>
   )};
   
   
   // const App = (props)=>{
   //  const [count, setCount]= useState(props.count)
   //  const [text, setText]= useState('')
   
   // useEffect(()=>{
   //   console.log('use effect ran')
   //   document.title=count
   // }, [count]) // or u can leave d array empty if u want useEffact to only run once -> dependency =0
   
   //   return (
   //     <div>
   //      <p>The current {text || 'count'} is {count}</p>
   //      <button onClick={()=> setCount(count +1)} >+1</button>
   //      <button onClick={()=> setCount(count -1)} >-1</button>
   //      <button onClick={()=> setCount(props.count)} >reset</button>
   //      <input value={text} onChange={(e)=>setText(e.target.value)} />
   //     </div>
   //   )
   // };

   export {App as default};