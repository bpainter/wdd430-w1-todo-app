import React from 'react';

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <h2>To-Do List</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;