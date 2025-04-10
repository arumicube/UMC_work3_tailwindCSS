interface CustomButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
  }
  
  export const CustomButton = ({ onClick, label, disabled = false }: CustomButtonProps) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded-lg font-medium transition 
          ${disabled
            ? 'bg-gray-300 text-white cursor-not-allowed'
            : 'bg-blue-300 text-white hover:bg-blue-400'}
        `}
      >
        {label}
      </button>
    );
  };
  