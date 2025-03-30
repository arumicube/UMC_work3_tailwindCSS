import { useTodo } from '../context/TodoContext';
import Button from './Button';

const DoneList = () => {
  const { done, deleteDone } = useTodo();

  return (
    <ul id="done-list" className="render-container__list">
      {done.map((item, idx) => (
        <li key={idx} className="render-container__item">
          {item}
          <Button
            text="삭제"
            onClick={() => deleteDone(idx)}
            color="#dc3545"
          />
        </li>
      ))}
    </ul>
  );
};

export default DoneList;