import ToDoItem from "./ToDoItem.jsx";
import { useTodos } from "../context/ToDoContext.jsx";

function ToDoList() {
  const { todos } = useTodos();
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default ToDoList;
