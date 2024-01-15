/* eslint-disable react/prop-types */
// TodoItem.js

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li className="bg-white p-4 mb-2 flex justify-between items-center rounded shadow">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="mr-2"
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="bg-purple-500 text-white px-2 py-1 rounded"
      >
        Remove
      </button>
    </li>
  );
}

export default TodoItem;
