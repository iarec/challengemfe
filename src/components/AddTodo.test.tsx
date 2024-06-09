import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodo from './AddTodo';
import { TodoProvider } from '../context/TodoContext';

describe('AddTodo component', () => {
  test('Submit button is disabled when input is empty', () => {
    render(
      <TodoProvider>
        <AddTodo />
      </TodoProvider>
    );
    const addButton = screen.getByRole('button');
    expect(addButton).toHaveProperty('disabled', true);
  });

  test('Submit button is enabled when input is not empty', async () => {
    render(
      <TodoProvider>
        <AddTodo />
      </TodoProvider>
    );
    const input = screen.getByTestId('todo-input');
    await userEvent.type(input, 'New todo item');
    const addButton = screen.getByRole('button');
    expect(addButton).toHaveProperty('disabled', false);
  });

    
});
