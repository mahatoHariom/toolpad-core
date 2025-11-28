
import { taskSchema } from './validation';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';

export type Task = {
  id: string;
  title: string;
  description?: string;
  status?: string;
};

// let tasks: any[] = []; // In-memory storage

// API functions
export const tasksApi = {
  fetchTasks: async (): Promise<Task[]> => {
    const res = await fetch('/api/tasks');
    if (!res.ok) throw new Error('Failed to fetch tasks');
    return res.json();
  },

  fetchTask: async (id: string | number): Promise<Task> => {
    const res = await fetch(`/api/tasks/${id}`);
    if (!res.ok) throw new Error('Failed to fetch task');
    return res.json();
  },

  createTask: async (values: Partial<Omit<Task, 'id'>>): Promise<Task> => {
    const parsed = taskSchema.parse(values);
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed),
    });
    if (!res.ok) throw new Error('Failed to create task');
    return res.json();
  },

  updateTask: async (id: string | number, values: Partial<Task>): Promise<Task> => {
    taskSchema.partial().parse(values);
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error('Failed to update task');
    return res.json();
  },

  deleteTask: async (id: string | number): Promise<void> => {
    const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete task');
  },
};

export const createTasksDataSource = (queryClient: QueryClient) => ({
  fields: [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'status', headerName: 'Status', width: 150 },
  ],

  getMany: async () => {
    const items = await queryClient.fetchQuery({
      queryKey: ['tasks'],
      queryFn: tasksApi.fetchTasks,
    });
    
    return {
      items,
      itemCount: items.length,
    };
  },

  getOne: async (id: string | number) => {
    return await queryClient.fetchQuery({
      queryKey: ['tasks', id],
      queryFn: () => tasksApi.fetchTask(id),
    });
  },

  createOne: async (values: Partial<Omit<Task, 'id'>>) => {
    const result = await tasksApi.createTask(values);
    await queryClient.invalidateQueries({ queryKey: ['tasks'] });
    return result;
  },

  updateOne: async (id: string | number, values: Partial<Task>) => {
    const result = await tasksApi.updateTask(id, values);
    await queryClient.invalidateQueries({ queryKey: ['tasks'] });
    await queryClient.invalidateQueries({ queryKey: ['tasks', id] });
    return result;
  },

  deleteOne: async (id: string | number) => {
    await tasksApi.deleteTask(id);
    await queryClient.invalidateQueries({ queryKey: ['tasks'] });
  },

  validate: (v: unknown) => {
    try {
      const parsed = taskSchema.parse(v);
      return { value: parsed };
    } catch (error) {
      return { value: {}, error };
    }
  },
});

// Optional: Export hooks if you need them elsewhere in your app
export function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: tasksApi.createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, values }: { id: string | number; values: Partial<Task> }) => 
      tasksApi.updateTask(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: tasksApi.deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });
}