import React from 'react';

import { Todo } from '../model';
import './styles.css';
import TodoComponent from './TodoComponent';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className='todos'>
      {todos.map((todo) => {
        return (
          <TodoComponent
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
