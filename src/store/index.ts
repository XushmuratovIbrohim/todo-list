import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todos.slice';
import { filtersReducer } from './filter/filters.slice';


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filtersReducer
  }
});
export type RootState = ReturnType<typeof store.getState>;