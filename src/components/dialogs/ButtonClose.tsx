interface buttonCloseProps {
  onClose: () => void;
  disabled: boolean;
}

const ButtonClose = ({ onClose, disabled }: buttonCloseProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClose}
      className='focus:outline-none self-end'
    >
      <svg
        className='max-h-7 w-7 text-[#E76C4A]'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={3}
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </button>
  );
};

export default ButtonClose;
