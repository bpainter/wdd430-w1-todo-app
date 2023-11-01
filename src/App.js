import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

/**
 * This is the main component of the Todo app.
 * It manages the state of the todo list and renders the TodoForm and TodoList components.
 * @returns {JSX.Element} The App component JSX
 */
function App() {
  // Initialize the todos state with the saved todos from localStorage or an empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save the todos state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  /**
   * Add a new todo to the list
   * @param {string} text - The text of the new todo
   */
  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  /**
   * Delete a todo from the list
   * @param {number} index - The index of the todo to delete
   */
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Render the TodoForm and TodoList components
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;