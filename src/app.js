import React, { useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Form } from './components/Form'
import { TaskList } from './components/TaskList'
import { Error } from './components/Error'
import { Counter } from './components/Counter'

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

  const totalCount = useMemo(() => tasks.length, [tasks])
  const completedCount = useMemo(() => tasks.reduce((sum, current) => (current.complete ? sum + 1 : sum), 0), [tasks])

  const memoCounter = useMemo(
    () => <Counter totalCount={totalCount} completedCount={completedCount} />,
    [totalCount, completedCount]
  )

  const memoError = useMemo(() => <Error message={error} onClose={() => setError('')} />, [error])

  return (
    <div className='flex h-screen items-center justify-center bg-gray-200 text-base'>
      <div className='container mx-auto max-w-xl rounded bg-white'>
        <div>
          <Form onSubmit={handleSubmit} />
          {memoError}
          <TaskList value={tasks} onRemoveItem={handleRemoveItem} onComplete={handleCompleted} />
          {memoCounter}
        </div>
      </div>
    </div>
  )
}
