import { useTodos } from "../context/ToDoContext";

function ToDoItem({ todo }) {
  const { removeTodo, toggleTodo } = useTodos();
  return (
    <li className={`todo-item ${todo.checked ? "checked" : ""}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>
          {todo.id}. {todo.text}
        </span>
      </label>
      <button className="delete-button" onClick={() => removeTodo(todo.id)}>
        삭제
      </button>
    </li>
  );
}

export default ToDoItem;
