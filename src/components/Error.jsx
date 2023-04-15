export const Error = ({ message, onClose }) => {
  return message ? (
    <div className='flex rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-600'>
      <p className='grow'>{message}</p>
      <button onClick={onClose} type='button' size='small' className='shrink-0 text-red-600'>
        <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
          {' '}
          <path
            d='M6 18L18 6M6 6L18 18'
            stroke='#3F3F46'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />{' '}
        </svg>{' '}
      </button>
    </div>
  ) : null
}
