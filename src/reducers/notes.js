const notesReducer = (state,action)=>{
    switch(action.type){
      case 'POPULATE_NOTES':
        return action.notes
  
      case 'ADD_NOTES':
        return  [
           ...state,
          {title: action.title, body: action.body} ] 
  
      case 'REMOVE_NOTES':
        return  state.filter(({title})=> action.title !== title )  
  
      default:
        return state
    }
  }

  export default notesReducer;