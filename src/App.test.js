import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders TodoForm and TodoList components', () => {
    render(<App />);
    const todoFormElement = screen.getByRole('textbox', { class: 'todo-form-input' });
    const todoListElement = screen.getByRole('heading', { class: 'todo-list-title'});
    expect(todoFormElement).toBeInTheDocument();
    expect(todoListElement).toBeInTheDocument();
  });

  test('adds a new todo to the list', () => {
    render(<App />);
    const todoInputElement = screen.getByRole('textbox', { class: 'todo-form-input' });
    const addButtonElement = screen.getByRole('button', { class: 'todo-form-action' });
    fireEvent.change(todoInputElement, { target: { value: 'Buy milk' } });
    fireEvent.click(addButtonElement);
    const todoListElement = screen.getByRole('list', { class: 'todo-list-items' });
    expect(todoListElement).toHaveTextContent('Buy milk');
  });

  test('deletes a todo from the list', () => {
    render(<App />);
    const todoInputElement = screen.getByRole('textbox', { class: 'todo-form-input' });
    const addButtonElement = screen.getAllByRole('button', { class: 'todo-form-action' })[0];
    fireEvent.change(todoInputElement, { target: { value: 'Buy milk' } });
    fireEvent.click(addButtonElement);
    const deleteButtonElement = screen.queryAllByRole('button', { class: 'todo-list-action' })[0];
    fireEvent.click(deleteButtonElement);
    const todoListElement = screen.getByRole('list', { class: 'todo-list-items' });
    expect(todoListElement).not.toHaveTextContent('Buy milk');
  });
});