import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createTodo, deleteTodo, getTodos, updateTodo } from "../../services/todo"

export const useGetTodos = () => {
    return useQuery<Todo[]>({
        queryKey: ['todos'],
        queryFn: getTodos,
        retry: 1, // 失败时重试次数
        staleTime: 1000 * 60 * 5, // 5 分钟内数据保持新鲜
    })
}

export const useUpdateTodo = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: updateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })
}

export const useCreateTodo = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })
}

export const useDeleteTodo = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        }
    })
}