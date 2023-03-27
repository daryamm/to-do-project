// import { Task } from './components/Task'
export function App() {
  return (
    <div className='h-screen bg-gray-200 text-base'>
      <div className='container mx-auto max-w-xl rounded-2xl bg-white'>
        <div className='flex rounded bg-blue-50 py-2'>
          <input
            className='m-5 h-12 w-full rounded border border-gray-300 py-2 px-3'
            placeholder='Новая задача...'
          ></input>
          <button className='my-auto -ml-16 mr-5 rounded bg-blue-600 py-2 px-3 text-white hover:bg-blue-300 hover:text-blue-600'>
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6.75 0.75C6.75 0.551088 6.67098 0.360322 6.53033 0.21967C6.38968 0.0790175 6.19891 0 6 0C5.80109 0 5.61032 0.0790175 5.46967 0.21967C5.32902 0.360322 5.25 0.551088 5.25 0.75V5.25H0.75C0.551088 5.25 0.360322 5.32902 0.21967 5.46967C0.0790175 5.61032 0 5.80109 0 6C0 6.19891 0.0790175 6.38968 0.21967 6.53033C0.360322 6.67098 0.551088 6.75 0.75 6.75H5.25V11.25C5.25 11.4489 5.32902 11.6397 5.46967 11.7803C5.61032 11.921 5.80109 12 6 12C6.19891 12 6.38968 11.921 6.53033 11.7803C6.67098 11.6397 6.75 11.4489 6.75 11.25V6.75H11.25C11.4489 6.75 11.6397 6.67098 11.7803 6.53033C11.921 6.38968 12 6.19891 12 6C12 5.80109 11.921 5.61032 11.7803 5.46967C11.6397 5.32902 11.4489 5.25 11.25 5.25H6.75V0.75Z'
                fill='currentColor'
              />
            </svg>
          </button>
        </div>
        <div>
          <label className='m-5 mb-4 mt-6 flex items-center rounded border border-gray-300 py-4 px-3'>
            <input
              type='checkbox'
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0'
            />
            <span className='ml-4 text-sm font-medium text-black'>Вывести список задач </span>
          </label>
        </div>

        <div>
          <label className='m-5 mb-4 mt-6 flex items-center rounded border border-gray-300 py-4 px-3'>
            <input
              type='checkbox'
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0'
            />
            <span className='ml-4 text-sm font-medium text-black'>Сделать форму добавления задач</span>
          </label>
        </div>

        <div>
          <label className='m-5 mb-4 mt-6 flex items-center rounded border border-gray-300 py-4 px-3'>
            <input
              type='checkbox'
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0'
              checked
            />
            <span className='ml-4 text-sm font-medium text-gray-400'>Разбить верстку на React компоненты</span>
          </label>
        </div>
        <div>
          <label className='m-5 mb-4 mt-6 flex items-center rounded border border-gray-300 py-4 px-3'>
            <input
              type='checkbox'
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0'
              checked
            />
            <span className='ml-4 text-sm font-medium text-gray-400'> Сверстать макет из Figma </span>
          </label>
        </div>
        <div>
          <label className='m-5 mb-4 mt-6 flex items-center rounded border border-gray-300 py-4 px-3'>
            <input
              type='checkbox'
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0'
              checked
            />
            <span className='ml-4 text-sm font-medium text-gray-400'>Добавить Tailwind CSS в проект</span>
          </label>
        </div>
        <div>
          <label className='m-5 mb-4 mt-6 flex items-center rounded border border-gray-300 py-4 px-3'>
            <input
              type='checkbox'
              // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
              className='h-4 w-4 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0
'
              checked
            />
            <span className='ml-4 text-sm font-medium text-gray-400'>Развернуть React приложение через Parcel</span>
          </label>
        </div>
        <div className='my-6 flex justify-center pb-5 text-sm text-gray-400'> Сделано 4 из 6 </div>
      </div>
    </div>
  )
}
