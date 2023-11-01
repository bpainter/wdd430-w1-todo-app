import React, { useState } from 'react';

/**
 * A form component for adding new to-do list items.
 * @param {Object} props - The props object.
 * @param {Function} props.addTodo - The function to add a new to-do item.
 * @returns {JSX.Element} - The TodoForm component.
 */
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  /**
   * Handles form submission.
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="todo-input" className="todo-form-label">New To-Do List Item:</label>
      <input
        type="text"
        id="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-form-input"
      />
      <button type="submit" className="todo-form-action">Add To-do</button>
    </form>
  );

}

export default TodoForm;