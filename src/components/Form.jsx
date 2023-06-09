import React, { useState } from 'react'

export const Form = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(taskName)

    setTaskName('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex rounded bg-blue-50 py-2'>
      <input
        type='text'
        className='m-5 h-12 w-full rounded border border-gray-300 py-2 px-3'
        placeholder='Новая задача...'
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value)
        }}
      ></input>
      <button
        type='submit'
        className='my-auto -ml-16 mr-5 rounded bg-blue-600 py-2 px-3 text-white hover:bg-blue-300 hover:text-blue-600'
      >
        <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M6.75 0.75C6.75 0.551088 6.67098 0.360322 6.53033 0.21967C6.38968 0.0790175 6.19891 0 6 0C5.80109 0 5.61032 0.0790175 5.46967 0.21967C5.32902 0.360322 5.25 0.551088 5.25 0.75V5.25H0.75C0.551088 5.25 0.360322 5.32902 0.21967 5.46967C0.0790175 5.61032 0 5.80109 0 6C0 6.19891 0.0790175 6.38968 0.21967 6.53033C0.360322 6.67098 0.551088 6.75 0.75 6.75H5.25V11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12C6.19891 12 6.38968 11.921 6.53033 11.7803C6.67098 11.6397 6.75 11.4489 6.75 11.25V6.75H11.25C11.4489 6.75 11.6397 6.67098 11.7803 6.53033C11.921 6.38968 12 6.19891 12 6C12 5.80109 11.921 5.61032 11.7803 5.46967C11.6397 5.32902 11.4489 5.25 11.25 5.25H6.75V0.75Z'
            fill='currentColor'
          />
        </svg>
      </button>
    </form>
  )
}
