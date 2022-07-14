import React from 'react';
import { useDispatch } from 'react-redux';


export default function Checkbox({task}) {

  const dispatch = useDispatch();

  const handleClick = () => {
      dispatch({type: 'REMAIN TASK', task: task.id, checked:task.isChecked});
  }

  return (

    <input type="checkbox" checked = {task.isChecked} name="chk" style={{ marginRight: '5px' }} onChange={handleClick}/>

  )
}
