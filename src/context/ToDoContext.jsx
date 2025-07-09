import { createContext, useContext, useRef, useState, useEffect } from "react";
import { setItem, getItem } from "../storage";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => getItem("todos", []));

  const lastId = useRef(Math.max(...todos.map((todo) => todo.id), 0) + 1);

  useEffect(() => {
    setItem("todos", todos);
  }, [todos]);

  const addTodo = (text) => {
    const todo = { id: lastId.current, text, checked: false };
    setTodos([...todos, todo]);
    lastId.current++;
  };

  const removeTodo = (seletedId) => {
    const filterTodos = todos.filter((todo) => todo.id != seletedId);
    setTodos(filterTodos);
  };

  const toggleTodo = (seletedId) => {
    const updateTodos = todos.map((todo) =>
      todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updateTodos);
  };

  const value = {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);

  return context;
}
