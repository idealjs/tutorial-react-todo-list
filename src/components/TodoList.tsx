import React from 'react';
import { ITodo } from '../types';
import TodoItem from './TodoItem';

interface ITodoListProps {
  todos: ITodo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = (props: ITodoListProps) => {
  const { todos, toggleTodo, deleteTodo } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;