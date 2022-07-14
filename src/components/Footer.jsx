import React from 'react';
import { useDispatch } from 'react-redux';
import './Footer.css';

export default function Footer() {

  const dispatch = useDispatch();

  const youText = React.createRef();

  const addTask = () =>{

    if(youText.current.value) {
      dispatch({type: 'ADD TASK', task: {text: youText.current.value, id: Date.now(), isChecked: false}});
      youText.current.value = '';
    }

  }

 
  


  return (
    <div className='footer'>
      <input type="text" style={{width:'100%'}} ref={youText}/>
      <button style={{borderRadius:'15px', marginLeft:'5px'}} onClick={addTask}>ADD</button>
    </div>
  )
}
