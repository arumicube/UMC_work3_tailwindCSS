import Button from './Button';

type Props = {
  task: string;
  buttonText: string;
  onClick: () => void;
  color?: string;
};

const Item = ({ task, buttonText, onClick, color }: Props) => {
  return (
    <li className="render-container__item">
      {task}
      <Button text={buttonText} onClick={onClick} color={color} />
    </li>
  );
};

export default Item;
