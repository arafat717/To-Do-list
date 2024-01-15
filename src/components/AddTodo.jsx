/* eslint-disable react/prop-types */
import { useState } from "react";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="border rounded py-2 px-3 mr-2"
      />
      <button
        onClick={handleAddTodo}
        className="bg-purple-500 text-white py-2 px-4 rounded"
      >
        Add Todo
      </button>
    </div>
  );
}

export default AddTodo;
