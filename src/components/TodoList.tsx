import { useTodo } from '../context/TodoContext';
import Button from './Button';

const TodoList = () => {
  const { todo, completeTodo } = useTodo();

  return (
    <ul id="todo-list" className="render-container__list">
      {todo.map((item, idx) => (
        <li key={idx} className="render-container__item">
          {item}
          <Button
            text="완료"
            onClick={() => completeTodo(idx)}
            color="#28a745"
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
