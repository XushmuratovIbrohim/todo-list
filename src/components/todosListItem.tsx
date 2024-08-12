import { FC, useCallback } from 'react';
import { Todo } from '../types/todo';
import { Checkbox } from './checkbox/checkbox';
import { Flex, Text, Button, useToast, useColorModeValue } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../store/todos/todos.slice';
import CrossIcon from '../../public/assets/cross-icon.svg';

type Props = {
  todo: Todo;
};

export const TodosListItem: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const onChange = useCallback(() => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  }, [todo, dispatch]);

  return (
    <Flex
      as="li"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid"
      borderColor={useColorModeValue('#E3E4F1', '#393A4B')}
      p="20px 24px"
    >
      <Flex gap="24px">
        <Checkbox
          isCompleted={todo.completed}
          onChange={() => {
            onChange();
          }}
          id={todo.id}
        />
        <Text
          fontSize={{ base: '18px', sm: '16px' }} 
          textDecoration={todo.completed ? 'line-through' : 'none'}
        >
          {todo.title}
        </Text>
      </Flex>
      <Button
        aria-label="delete todo"
        bg="none"
        _hover={{ bg: 'none' }}
        onClick={() => {
          toast({
            position: 'top-right',
            status: 'success',
            duration: 1500,
            isClosable: true,
            title: 'Todo deleted',
          });
          dispatch(deleteTodo(todo.id));
        }}
      >
        <CrossIcon />
      </Button>
    </Flex>
  );
};
