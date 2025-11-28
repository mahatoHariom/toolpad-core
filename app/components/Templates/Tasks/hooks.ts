// // hooks.ts
// import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
// import { tasksApi, Task } from './datasource';

// export { Task } from './datasource';

// export function useTasks() {
//   return useQuery({ 
//     queryKey: ['tasks'], 
//     queryFn: tasksApi.fetchTasks 
//   });
// }

// export function useCreateTask() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: tasksApi.createTask,
//     onSuccess: () => {
//       // Automatically invalidate and refetch tasks after creation
//       queryClient.invalidateQueries({ queryKey: ['tasks'] });
//     },
//   });
// }

// export function useUpdateTask() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: ({ id, values }: { id: string | number; values: Partial<Task> }) => 
//       tasksApi.updateTask(id, values),
//     onSuccess: () => {
//       // Automatically invalidate and refetch tasks after update
//       queryClient.invalidateQueries({ queryKey: ['tasks'] });
//     },
//   });
// }

// export function useDeleteTask() {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: tasksApi.deleteTask,
//     onSuccess: () => {
//       // Automatically invalidate and refetch tasks after deletion
//       queryClient.invalidateQueries({ queryKey: ['tasks'] });
//     },
//   });
// }