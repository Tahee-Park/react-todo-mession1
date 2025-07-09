import "./App.css";
import ToDoWriteForm from "./components/ToDoWriteForm";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="todo-container">
      <h1 className="todo-title">To-Do List</h1>
      <ToDoWriteForm />
      <ToDoList />
    </div>
  );
}

export default App;
