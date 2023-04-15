// import { useState } from 'react'
import { Task } from './Task'

export const TaskList = ({ value, onRemoveItem, onCompleteItem }) => {
  return (
    <div>
      {value.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          complete={task.complete}
          onCompleted={(isCompleted) => onCompleteItem(task.id, isCompleted)}
          onRemove={() => onRemoveItem(task.id)}
        />
      ))}
    </div>
  )
}
