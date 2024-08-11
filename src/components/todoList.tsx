import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { TodosListItem } from './todosListItem';
import { Filter } from './filter';
import { Todo } from '../types/todo';
import { selectAllTodos } from '../store/todos/todos.slice';
import { FilterSlice } from '../types/store';

export const TodoList: FC = () => {
  const todos = useSelector<RootState, Todo[]>(selectAllTodos);
  const { filterStatus } = useSelector<RootState, FilterSlice>((state) => state.filter);
  const filteredTodos = useMemo(() => {
    switch (filterStatus) {
      case 'active':
        return todos.filter(({ completed }) => !completed);
      case 'completed':
        return todos.filter(({ completed }) => completed);
      default:
        return todos;
    }
  }, [todos, filterStatus]);

  const bg = useColorModeValue('#FAFAFA', '#171823');
  const boxShadow = useColorModeValue(
    '0px 35px 50px -15px rgba(194, 195, 214, 0.50)',
    '0px 35px 50px -15px rgba(0, 0, 0, 0.50);'
  );

  return (
    <Box
      bg={bg}
      borderRadius="10px"
      boxShadow={boxShadow}
    >
      <Flex
        as="ul"
        direction="column"
      >
        {filteredTodos.length ? (
          filteredTodos.map((todo) => {
            return (
              <TodosListItem
                key={todo.id}
                todo={todo}
              />
            );
          })
        ) : (
          <Box
            p="20px 24px"
            borderBottom="1px solid #393A4B"
          >
            <Text textAlign="center">Todos Empty</Text>
          </Box>
        )}
      </Flex>
      <Filter />
    </Box>
  );
};
