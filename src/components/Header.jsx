import React from 'react';
import { useSelector } from 'react-redux';

import "./Header.css";

export default function Header() {

  const quatityTasks = useSelector(state => state.tasks);

  const quantityRemainTasks = quatityTasks.filter((task)=>task.isChecked === false)

   
  return (
    <div className='header'>
      <div className ='tasks'>
        <span >{quatityTasks.length}:</span>
        <h1>Tasks</h1>
      </div>
      <div className ='remains'>
        <span>{quantityRemainTasks.length}:</span>
        <h1>Remain</h1>
      </div>
    </div>
  )

  
}
