import Image from 'next/image';
import signup from '@/assets/button/signup.png';

interface buttonRegisterProps {
  onClose: () => void;
  disabled: boolean;
}

const ButtonRegister = ({ onClose, disabled }: buttonRegisterProps) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      onClick={() => null}
      className='focus:outline-none  bg-[#E76C4A]  active:bg-[#db5935] disabled:bg-gray-700 
       w-full h-10 rounded-lg flex justify-center items-center space-x-1'
    >
      <div className='relative w-10 h-full transform scale-75'>
        <Image src={signup} alt='signup icon' layout='fill' objectFit='cover' />
      </div>
      <h1 className='text-white text-lg font-normal tracking-tighter uppercase'>
        inscribirse
      </h1>
    </button>
  );
};

export default ButtonRegister;

/*

<svg
        className='h-8 w-8 text-white transform scale-x-110'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1}
          d='M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z'
        />
      </svg>

*/
