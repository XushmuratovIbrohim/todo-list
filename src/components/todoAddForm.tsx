import { useColorModeValue, Input, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addTodo }  from '../store/todos/todos.slice';
import { FC, useState } from 'react';

export const TodoAddForm: FC = () => {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');
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
        if (!title || !title.replace(/\s/g, '').length) {
          setError('Title is required');
          toast({
            position: 'top-right',
            title: 'Error',
            description: 'Title is required',
            status: 'error',
            duration: 1500,
            isClosable: true,
          })
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
