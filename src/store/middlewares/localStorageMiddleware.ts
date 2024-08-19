import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('todos', JSON.stringify(store.getState().todos.entities));
  return result;
}