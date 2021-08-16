
interface buttonEditProfileProps {
  onShow : () => void
}

const ButtonEditProfile = ({onShow} : buttonEditProfileProps) => {
  return (
    <button
      type='button'
      onClick={onShow}
      className='focus:outline-none flex justify-center items-end space-x-1 mt-2 ml-4
      '
    >
      <svg
        className='h-5 w-5'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
      >
        <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
        <path
          fillRule='evenodd'
          d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
          clipRule='evenodd'
        />
      </svg>
      <div className='text-xs text-[#262C34] font-normal'>Editar</div>
    </button>
  );
};

export default ButtonEditProfile;
