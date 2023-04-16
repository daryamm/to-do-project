export const Counter = ({ completedCount, totalCount }) => {
  if (totalCount > 0)
    return (
      <div className='mt-6 flex items-center justify-center pb-5 text-sm text-gray-400'>
        {' '}
        Сделано {completedCount} из {totalCount}{' '}
      </div>
    )
  if (totalCount === 0)
    return <div className='mt-6 flex items-center justify-center pb-5 text-sm text-gray-400'> Задач нет </div>
}
