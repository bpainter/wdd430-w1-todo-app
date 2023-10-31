import React from 'react';

function TodoList({ todos, deleteTodo }) {
    return (
      <section className="todo-list">
        <h2>Items on Your To-do List</h2>
        {todos.length === 0 ? (
          <p className="todo-list-message">You have no to-do's in your list</p>
        ) : (
          todos.map((todo, index) => (
              <li key={index} className="todo-list-item">
                {todo}
                <button onClick={() => deleteTodo(index)} className="todo-list-action">Delete</button>
              </li>
          ))
        )}
      </section>
    );
  }

export default TodoList;