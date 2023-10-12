import React from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const todosArr = [new Todo('Learn React'), new Todo('Learn TypeScript')];
  return (
    <div>
      <NewTodo />
      <Todos items={todosArr} />
    </div>
  );
}

export default App;
