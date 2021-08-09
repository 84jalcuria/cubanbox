const ButtonBeginDesktop = () => {
  return (
    <button
      type='button'
      className='focus:outline-none  bg-[#E76C4A] active:bg-[#e7562d] w-[115px] h-8 rounded-md 
        flex justify-start items-center space-x-2'
    >
      <svg
        className='fill-current text-white w-5 h-5 transform rotate-90 ml-4'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M24 22h-24l12-20z' />
      </svg>

      <h1 className='text-white text-sm font-semibold tracking-normal'>
        Iniciar
      </h1>
    </button>
  );
};

export default ButtonBeginDesktop;
