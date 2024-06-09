import React, { useState } from 'react';
import { useTodo } from '../hooks/useTodo';

const AddTodo = () => {
  const { addTodo } = useTodo();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmission} data-testid='add-todo-section'>
      <div>
        <input
          autoFocus
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="Task to complete..."
          data-testid="todo-input"
        />
        <button type="submit" disabled={!newTodo}>
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
