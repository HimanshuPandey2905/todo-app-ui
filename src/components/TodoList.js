function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 border-b border-gray-200 last:border-none"
        >
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`${todo.completed ? "line-through" : ""}`}
          >
            {todo.title}
          </span>
          <button
            onClick={() => removeTodo(todo.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition duration-150 ease-in-out"
          >

            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
// hello from local
