const ButtonBeginMobile = () => {
  return (
    <button
      type='button'
      className='focus:outline-none  bg-transparent active:bg-[#e7562d] w-[100px] h-6 rounded-md 
      border-2 border-[#E76C4A] flex justify-start items-center'
    >
      <svg
        className='fill-current text-white w-8 h-8 transform rotate-90 scale-[45%] ml-2'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
      >
        <path d='M24 22h-24l12-20z' />
      </svg>

      <h1 className='text-white text-xs font-bold tracking-tighter'>Iniciar</h1>
    </button>
  );
};

export default ButtonBeginMobile;
