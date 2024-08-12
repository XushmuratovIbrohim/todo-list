import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { FC } from 'react';
import { clearCompleted, selectTotal } from '../store/todos/todos.slice';
import { filterTodos } from '../store/filter/filters.slice';
import { FilterSlice } from '../types/store';

export const Filter: FC = () => {
  const { filterStatus, filters } = useSelector<RootState, FilterSlice>((state) => state.filter);
  const todosLength = useSelector(selectTotal);
  const dispatch = useDispatch();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p="20px 24px"
    >
      <Text>{todosLength} items left</Text>
      <Flex
        as="ul"
        gap={{ base: '19px', sm: '5px' }}
      >
        {filters.map((filter) => {
          return (
            <Box key={filter}>
              <Button
                variant='basic'
                color={filterStatus === filter ? '#3A7CFD' : '#9495A5'}
                onClick={() => {
                  dispatch(filterTodos(filter));
                }}
              >
                {filter}
              </Button>
            </Box>
          );
        })}
      </Flex>
      <Button
        variant="basic"
        onClick={() => {
          dispatch(clearCompleted());
        }}
      >
        Clear completed
      </Button>
    </Flex>
  );
};
