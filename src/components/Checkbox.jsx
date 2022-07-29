import React from 'react';
import { useDispatch } from 'react-redux';
import { REMAIN_TASK } from './actions.js';


export default function Checkbox({task}) {

  const dispatch = useDispatch();

  const handleClick = () => {
      dispatch({type: REMAIN_TASK, task: task.id, checked:task.isChecked});
  }

  return (
    <input type="checkbox" checked = {task.isChecked} name="chk" style={{ marginRight: '5px' }} onChange={handleClick}/>
  )
}
