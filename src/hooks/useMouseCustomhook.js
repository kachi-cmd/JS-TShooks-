import React, {useState, useEffect} from 'react';


const useMousePosition = ()=>{
    const [position, setposition] = useState({ x:0, y:0})
  
    const hamdleMousemove =  (e)=>{
      setposition({
        x: e.pageX,
        y: e.pageY
      })
    }
  
    useEffect (()=>{
      document.addEventListener('mousemove', hamdleMousemove)
      return ()=> {
      document.removeEventListener('mousemove', hamdleMousemove)
       }
       
    }, [])
  
    return position
  }

  export default useMousePosition;