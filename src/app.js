import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Form } from './components/Form'
import { TaskList } from './components/TaskList'
import { Error } from './components/Error'

export function App() {
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  const handleSubmit = (taskName) => {
    if (!taskName) {
      setError('Enter text')
      return
    }

    const task = {
      id: uuidv4(),
      title: taskName,
      complete: false
    }

    setTasks([...tasks, task])
  }

  const handleRemoveItem = (id) => setTasks(tasks.filter((task) => task.id !== id))

  const handleCompleted = (id, isCompleted) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: isCompleted }
        }

        return task
      })
    )
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gray-200 text-base'>
      <div className='container mx-auto max-w-xl rounded bg-white'>
        <div>
          <Form onSubmit={handleSubmit} />
          <Error message={error} onClose={() => setError('')} />
          <TaskList value={tasks} onRemoveItem={handleRemoveItem} onComplete={handleCompleted} />{' '}
          <div className='mt-6 flex items-center justify-center pb-5 text-sm text-gray-400'>
            {tasks.length <= 0 && <p> Задач нет </p>}
            {tasks.length > 0 && <p> Сделано из {tasks.length} </p>}
          </div>
        </div>
      </div>
    </div>
  )
}
