import { Badge, Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDeleteTodo, useUpdateTodo } from "../hooks/query/useTodoQuery";

const TodoItem = ({ todo }: { todo: Todo }) => {
    const { mutate: updateMutate, isPending: isUpdating } = useUpdateTodo()
    const { mutate: deleteMutate, isPending: isDeleting } = useDeleteTodo()

    const updateTodoStatus = () => {
        const nextTodo = { ...todo, completed: !todo.completed }
        updateMutate(nextTodo)
    }

    const deleteTodo = () => {
        deleteMutate(todo.id || 0)
    }

    return (
        <Flex gap={2} alignItems={"center"}>
            <Flex
                flex={1}
                alignItems={"center"}
                border={"1px"}
                borderColor={"gray.600"}
                p={2}
                borderRadius={"lg"}
                justifyContent={"space-between"}
            >
                <Text
                    color={todo.completed ? "green.200" : "yellow.100"}
                    textDecoration={todo.completed ? "line-through" : "none"}
                >
                    {todo.body}
                </Text>
                {todo.completed && (
                    <Badge ml='1' colorScheme='green'>
                        Done
                    </Badge>
                )}
                {!todo.completed && (
                    <Badge ml='1' colorScheme='yellow'>
                        In Progress
                    </Badge>
                )}
            </Flex>
            <Flex gap={2} alignItems={"center"}>
                <Box color={"green.500"} cursor={"pointer"} onClick={updateTodoStatus}>
                    {!isUpdating && <FaCheckCircle size={20} />}
                    {isUpdating && <Spinner size={'sm'} />}
                </Box>
                <Box color={"red.500"} cursor={"pointer"} onClick={deleteTodo}>
                    {!isDeleting && <MdDelete size={25} />}
                    {isDeleting && <Spinner size={'sm'} />}
                </Box>
            </Flex>
        </Flex>
    );
};
export default TodoItem;