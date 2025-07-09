import { useTodos } from "../context/ToDoContext";

function ToDoWriteForm() {
  const { addTodo } = useTodos();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.todo.value.trim(); // 공백 입력 막기

    if (text === "") return; // 빈 문자열이면 추가 안 함

    addTodo(text); // 추가
    form.todo.value = ""; // 입력창 초기화
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className="todo-form">
        <input type="text" name="todo" placeholder="할 일을 입력하세요" />
        <button>추가</button>
      </form>
    </>
  );
}

export default ToDoWriteForm;
