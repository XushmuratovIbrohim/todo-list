import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { saveTodosLocally } from '../../utils/saveTodosLocally';
import { Todo } from '../../types/todo';
import { RootState } from '../index';

const { getInitialState, getSelectors, setOne, removeOne, removeMany, upsertOne } = createEntityAdapter<Todo>();

export const todosSlice = createSlice({
  name: 'todos',
  initialState: getInitialState(
    {},
    localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') || '') : []
  ),
  reducers: {
    addTodo: (state, { payload: todoTitle }: { payload: string }) => {
      setOne(state, { id: Date.now().toString(), title: todoTitle, completed: false });
      saveTodosLocally(getSelectors().selectAll(state));
    },
    deleteTodo: (state, { payload: todoId }: { payload: string }) => {
      removeOne(state, todoId);
      saveTodosLocally(getSelectors().selectAll(state));
    },
    updateTodo: (state, { payload: todo }: { payload: Todo }) => {
      upsertOne(state, todo);
      saveTodosLocally(getSelectors().selectAll(state));
    },
    clearCompleted: (state) => {
      const ids = getSelectors()
        .selectAll(state)
        .filter((todo) => todo.completed)
        .map((todo) => todo.id);

      removeMany(state, ids);
      saveTodosLocally(getSelectors().selectAll(state));
    },
  },
});

export const { selectAll: selectAllTodos, selectTotal } = getSelectors((state: RootState) => state.todos);

export const { addTodo, deleteTodo, updateTodo, clearCompleted } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
