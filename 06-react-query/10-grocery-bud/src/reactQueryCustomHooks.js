import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';

export const useGetTasks = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/api/tasks')
  });

  return { data, error, isPending, isError };
}

export const useCreateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (title) => customFetch.post('/api/tasks', { title }),
    
    // This function will be executed when mutation encounters an error: title is empty
    // This error is the rejected value/thrown error of the returned Promise of the mutation function
    onError: (error) => toast.error(error.response.data.msg),
    // This function will be executed when mutation is successful
    onSuccess: () => {
      // Refetch query!!!
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Added!');
    }
  });

  return { createTask, isPending };
}

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: updateTask } = useMutation({
    mutationFn: ({ id, isDone }) => customFetch.patch(`/api/tasks/${id}`, { isDone }),
    
    onError: (error) => toast.error(error.response.data.msg),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Updated!');
    }
  });

  return updateTask;
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask, isPending } = useMutation({
    mutationFn: (id) => customFetch.delete(`/api/tasks/${id}`),
    
    onError: (error) => toast.error(error.response.data.msg),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('Deleted!');
    }
  });

  return { deleteTask, isPending };
}