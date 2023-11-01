import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
  it('should render a form with a label, input and button', () => {
    render(<TodoForm />);
    expect(screen.getByLabelText('New To-Do List Item:')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call addTodo when form is submitted with a value', () => {
    const addTodoMock = jest.fn();
    render(<TodoForm addTodo={addTodoMock} />);
    const input = screen.getByLabelText('New To-Do List Item:');
    const button = screen.getByRole('button');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);
    expect(addTodoMock).toHaveBeenCalledWith('Test Todo');
  });

  it('should not call addTodo when form is submitted with an empty value', () => {
    const addTodoMock = jest.fn();
    render(<TodoForm addTodo={addTodoMock} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(addTodoMock).not.toHaveBeenCalled();
  });
});