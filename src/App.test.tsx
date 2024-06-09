import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('Components rendered', () => {
    render(<App />);

    const addTodoSection = screen.getByTestId('add-todo-section');
    const filterSection = screen.getByTestId('filter-section');
    const listSection = screen.getByTestId('list-section');

    expect(addTodoSection).toBeDefined();
    expect(filterSection).toBeDefined();
    expect(listSection).toBeDefined();
  });

  test('Adding todo item to list', async () => {
    render(<App />);

    const input = screen.getByTestId('todo-input');
    await userEvent.type(input, 'New todo item');
    const addButton = screen
      .getByTestId('add-todo-section')
      .querySelector('button');
    await userEvent.click(addButton!);
    const list = screen.getByTestId('list-section');
    expect(list.innerHTML).toBe(
      `<div><input type="checkbox"><span style="text-decoration: none;">New todo item</span></div>`
    );
  });
});
