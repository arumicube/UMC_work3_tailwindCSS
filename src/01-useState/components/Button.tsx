

type ButtonProps = {
        text: string;
        onClick: () => void;
        color?: string;
      };
      const Button = ({ text, onClick, color }: ButtonProps) => {
        return (
          <button
            onClick={onClick}
            className="render-container__item-button"
            style={{ backgroundColor: color, marginLeft: '10px' }}
          >
            {text}
          </button>
        );
      };
      
      



export default Button;