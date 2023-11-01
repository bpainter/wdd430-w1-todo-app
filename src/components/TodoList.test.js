import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders the todo list title', () => {
  const todos = [];
  render(<TodoList todos={todos} />);
  const titleElement = screen.getByText(/Items on Your To-do List/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders a message when there are no todos', () => {
  const todos = [];
  render(<TodoList todos={todos} />);
  const messageElement = screen.getByText(/You have no to-do's in your list/i);
  expect(messageElement).toBeInTheDocument();
});

test('renders the list of todos', () => {
  const todos = ['Todo 1', 'Todo 2', 'Todo 3'];
  render(<TodoList todos={todos} />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems.length).toBe(3);
});

test('calls deleteTodo when the delete button is clicked', () => {
  const deleteTodo = jest.fn();
  const todos = ['Todo 1', 'Todo 2', 'Todo 3'];
  render(<TodoList todos={todos} deleteTodo={deleteTodo} />);
  const deleteButtons = screen.getAllByText('Delete');
  fireEvent.click(deleteButtons[1]);
  expect(deleteTodo).toHaveBeenCalledWith(1);
});