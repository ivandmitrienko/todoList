import React from 'react';
import { useDispatch } from 'react-redux';
import Checkbox from './Checkbox';
import './Tasks.css';
import { REMOVE_TASK } from './actions.js'

export default function Tasks({ task }) {

  const dispatch = useDispatch();

  const deleteTask = () => {
    dispatch({type: REMOVE_TASK, task: task.id});
  }

  return (
    <div>
      <div className='tasks'>
        <Checkbox task={task}/>
        <span style={{ fontSize: '20px' }}>{task.text}</span>
        <button style={{ marginLeft: '5px', borderRadius: '5px' }} onClick={deleteTask}>Delete</button>
      </div>
    </div>
  )

}
