import { useColorModeValue, Input, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, selectAllTodos }  from '../store/todos/todos.slice';
import { FC, useState } from 'react';
import { Todo } from '../types/todo';
import { RootState } from '../store';

export const TodoAddForm: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');
  const todos = useSelector<RootState, string[]>((state) => {
    return selectAllTodos(state).map((todo) => todo.title);
  });
  const bg = useColorModeValue('#FAFAFA', '#171823');
  const toast = useToast();
  const dispatch = useDispatch();
  const boxShadow = useColorModeValue(
    '0px 35px 50px -15px rgba(194, 195, 214, 0.50)',
    '0px 35px 50px -15px rgba(0, 0, 0, 0.50);'
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!title || !title.replace(/\s/g, '').length || todos.includes(title)) {
          setError('Title is required');
          setTitle('');
          return;
        }
        dispatch(addTodo(title));
        setError('');
        setTitle('');
        toast({
          position: 'top-right',
          title: 'Success',
          description: 'Todo added',
          status: 'success',
          duration: 1500,
          isClosable: true,
        })
      }}
    >
      <Input
        type="text"
        height='auto'
        _focus={{ border: 'none', outline: 'none', boxShadow: 'none' }}
        _hover={{ border: 'none', outline: 'none', boxShadow: 'none' }}
        border={error ? '1px solid red' : 'none'}
        placeholder='Create a new todo...'
        bg={bg}
        borderRadius='10px'
        p='20px 24px'
        mb='24px'
        boxShadow={boxShadow}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError('');
        }}
      ></Input>
    </form>
  );
};
