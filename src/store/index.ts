import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todos.slice';
import { filtersReducer } from './filter/filters.slice';
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filtersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof todosReducer>;

export default store