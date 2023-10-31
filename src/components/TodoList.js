import React from 'react';

function TodoList({ todos, deleteTodo }) {
    return (
      <div>
        <h2>To-Do List</h2>
        {todos.length === 0 ? (
          <p>You have no to-do's in your list</p>
        ) : (
          todos.map((todo, index) => (
            <div key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          ))
        )}
      </div>
    );
  }

export default TodoList;