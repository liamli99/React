import Item from './Item';
import { useGetTasks } from './reactQueryCustomHooks';

const Items = () => {
  // Compared to using 03-advanced-topics/03-conditional-rendering/02-multiple-returns-fetch-data.jsx!!!
  const { data, error, isPending, isError } = useGetTasks();

  // console.log(data);

  if (isPending) {
    return <p style={{ marginTop: '1rem' }}>Loading...</p>
  }

  if (isError) {
    return <p style={{ marginTop: '1rem' }}>{error.message}</p>
  }
  
  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <Item key={item.id} {...item} />
      })}
    </div>
  );
}

export default Items;