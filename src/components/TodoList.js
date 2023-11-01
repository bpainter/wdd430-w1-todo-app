import React from 'react';

/**
 * Renders a list of todos and a delete button for each todo item.
 * @param {Object} props - The props object containing todos and deleteTodo function.
 * @param {Array} props.todos - An array of todo items to be displayed.
 * @param {Function} props.deleteTodo - A function to delete a todo item.
 * @returns {JSX.Element} - A section element containing a list of todo items and a delete button for each item.
 */
function TodoList({ todos, deleteTodo }) {
    return (
      <section className="todo-list">
        <h2 className="todo-list-title">Items on Your To-do List</h2>
        {todos.length === 0 ? (
          <p className="todo-list-message">You have no to-do's in your list</p>
        ) : (
          <ol className="todo-list-items">
            {todos.map((todo, index) => (
              <li key={index} className="todo-list-item">
                {todo}
                <button onClick={() => deleteTodo(index)} className="todo-list-action">Delete</button>
              </li>
            ))}
          </ol>
        )}
      </section>
    );
  }

export default TodoList;