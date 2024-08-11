import { Todo } from '../types/todo';

export const saveTodosLocally = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
