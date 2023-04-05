export const Task = ({ plan }) => {
  return (
    <div>
      <label className='m-5 mb-4 mt-6 flex items-center rounded border border-gray-300 py-4 px-3'>
        <input
          type='checkbox'
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          className='h-4 w-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0'
        />
        <span className='ml-4 text-sm font-medium text-black'>{plan}</span>
      </label>
    </div>
  )
}
