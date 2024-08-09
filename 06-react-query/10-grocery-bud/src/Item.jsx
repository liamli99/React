import { useUpdateTask, useDeleteTask } from './reactQueryCustomHooks';

const Item = ({ id, isDone, title }) => {
  const updateTask = useUpdateTask();
  const { deleteTask, isPending } = useDeleteTask();

  return (
    <div className='single-item'>
      <input type='checkbox' checked={isDone} onChange={() => updateTask({ id, isDone: !isDone })} />
      
      <p style={{ textDecoration: isDone && 'line-through' }}>
        {title}
      </p>
      
      <button className='btn remove-btn' onClick={() => deleteTask(id)} disabled={isPending}>
        Delete
      </button>
    </div>
  );
}

export default Item;