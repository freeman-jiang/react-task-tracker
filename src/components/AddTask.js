import React, { useState } from 'react'

const AddTask = ({onAdd, onShowAddTask}) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a name for your task.')
      return
    }

    onAdd( {text, day, reminder }) 
    setText('')
    setDay('')
    setReminder(false)
  }


  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' 
        placeholder='Add Task Name' 
        value={text} 
        onChange={e => setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input 
        type='text' 
        placeholder='Add Task Date' 
        value={day} 
        onChange={e => setDay(e.target.value)}/>
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
        type='checkbox'
        checked={reminder}
        value={reminder}
        onChange={e => setReminder(!reminder)} />
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form >
  )
}

export default AddTask
