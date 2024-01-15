import { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex">
      <div className="flex flex-[3] bg-slate-500 ">
        <div className="mt-14 mx-auto">
          <h1 className="text-black">Write your todos</h1>
          <AddTodo addTodo={addTodo} />
        </div>
      </div>
      <div className="flex flex-[6] bg-slate-300 h-screen w-full">
        <div className="container mx-auto p-4 mt-14">
          <h1 className="text-3xl font-bold mb-4 text-black"> To-Do List</h1>

          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
