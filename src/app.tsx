import { FC } from 'react';

import { Header } from './components/header';
import { TodoList } from './components/todoList';
import { TodoAddForm } from './components/todoAddForm';

const App: FC = () => {
  return (
    <>
      <Header />
      <TodoAddForm />
      <TodoList />
    </>
  );
};

export default App;
