import axiosInstance from "./axiosInstance"

export const getTodos = async (): Promise<Todo[]> => {
    const { data } = await axiosInstance.get('/todo/get/all')
    return data
}

export const updateTodo = async (todo: Todo) => {
    const { data } = await axiosInstance.post("/todo/update", todo)
    return data
}

export const createTodo = async (todo: Todo) => {
    const { data } = await axiosInstance.post("/todo/create", todo)
    return data
}

export const deleteTodo = async (id: number) => {
    const { data } = await axiosInstance.post(`todo/delete/${id}`)
    return data
}