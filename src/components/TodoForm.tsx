import { Box, Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { useCreateTodo } from "../hooks/query/useTodoQuery";

const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");
    const { mutate: createMutate, isPending: isCreating } = useCreateTodo()
    const createTodo = () => {
        const todo: Todo = {
            completed: false,
            body: newTodo
        }
        createMutate(todo)
    }

    return (
        <Box>
            <Flex gap={2}>
                <Input
                    type='text'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    ref={(input) => input && input.focus()}
                />
                <Button
                    mx={2}
                    type='submit'
                    _active={{
                        transform: "scale(.97)",
                    }}
                    onClick={() => createTodo()}
                >
                    {isCreating ? <Spinner size={"xs"} /> : <IoMdAdd size={30} />}
                </Button>
            </Flex>
        </Box>
    );
};
export default TodoForm;