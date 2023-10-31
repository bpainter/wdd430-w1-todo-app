import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the todo form', () => {
  const { getByLabelText } = render(<App />);
  const inputElement = getByLabelText(/New To-Do List Item/i);
  expect(inputElement).toBeInTheDocument();
});

test('allows users to add a todo', () => {
  const { getByLabelText, getByText, getByRole } = render(<App />);
  const inputElement = getByLabelText(/New To-Do List Item/i);
  const addButton = getByRole('button', { name: /Add To-do/i });

  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  const todoItem = getByText('Test Todo');
  expect(todoItem).toBeInTheDocument();
});

test('allows users to delete a todo', () => {
  const { getByLabelText, getByText, getByRole } = render(<App />);
  const inputElement = getByLabelText(/New To-Do List Item/i);
  const addButton = getByRole('button', { name: /Add To-do/i });

  // Add a todo
  fireEvent.change(inputElement, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  const deleteButton = getByText('Delete');
  fireEvent.click(deleteButton);

  expect(() => getByText('Test Todo')).toThrow();
});