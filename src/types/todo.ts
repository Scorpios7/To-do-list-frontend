declare global {
    interface Todo {
        id?: number
        completed: boolean
        body: string
    }
}