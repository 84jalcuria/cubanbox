interface buttonSignInProps {
  disabled: boolean;
}

const ButtonSignIn = ({ disabled }: buttonSignInProps) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      className='focus:outline-none  bg-[#E76C4A]  active:bg-[#db5935] disabled:bg-gray-700 
      w-full h-10 rounded-lg flex justify-center items-center space-x-1'
    >
      <svg
        className='h-6 w-6 text-white transform scale-150'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M13 7l5 5m0 0l-5 5m5-5H6'
        />
      </svg>
      <h1 className='text-white text-lg font-normal tracking-tighter uppercase'>
        iniciar sesion
      </h1>
    </button>
  );
};

export default ButtonSignIn;
