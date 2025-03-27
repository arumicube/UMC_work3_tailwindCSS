import { useTodo } from "../context/TodoContext";

const TodoInput = () => {
  const { input, setInput, addTodo } = useTodo();

  return (
    <form id="todo-form" className="todo-container__form" onSubmit={addTodo}>
      <input
        type="text"
        id="todo-input"
        className="todo-container__input"
        placeholder="할 일 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button type="submit" className="todo-container__button">
        할 일 추가
      </button>
    </form>
  );
};

export default TodoInput;
