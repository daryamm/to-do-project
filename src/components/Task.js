import { useState } from 'react'

export const Task = ({ title, onCompleted }) => {
  const [checked, setChecked] = useState([])
  // const [checked, setChecked] = useState(true)

  const handleChange = (e) => {
    setChecked(e.target.checked)

    onCompleted(e.target.checked)
  }

  return (
    <div>
      <label className='m-5 mb-4 mt-6 flex items-center space-x-4  rounded border border-gray-300 py-4 px-3'>
        <input
          onChange={handleChange}
          checked={checked}
          type='checkbox'
          className='h-4 w-4 shrink-0 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-offset-0'
        />
        <span className='ml-4 grow text-sm font-medium text-black'>{title}</span>
        <button size='small' className='shrink-0 text-gray-500'>
          <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6 18L18 6M6 6L18 18'
              stroke='#3F3F46'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </label>
    </div>
  )
}
