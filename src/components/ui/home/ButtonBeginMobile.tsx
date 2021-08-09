const ButtonBeginMobile = () => {
  return (
    <button
      type='button'
      className='focus:outline-none  bg-transparent active:bg-[#e7562d] w-[135px] h-9 rounded-md 
      border-2 border-[#E76C4A] flex justify-start items-center space-x-2'
    >
      <svg
        className='fill-current text-white w-5 h-5 transform rotate-90 ml-5'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M24 22h-24l12-20z' />
      </svg>

      <h1 className='text-white text-lg font-semibold tracking-normal capitalize'>
        Iniciar
      </h1>
    </button>
  );
};

export default ButtonBeginMobile;
