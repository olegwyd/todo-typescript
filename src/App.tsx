import React, { useState } from 'react';

import InputComponent from './components/InputComponent';
import TodoList from './components/TodoList';
import { Todo } from './model';

import './App.css';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { todo: todo, isDone: false, id: Date.now() }]);
      setTodo('');
    }
  };

  console.log(todos);

  return (
    <div className='App'>
      <header>Tasks</header>
      <InputComponent todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
