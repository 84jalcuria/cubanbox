import Image from 'next/image';
import signup from '@/assets/button/signup.png';
interface buttonRegisterMobileProps {
  onShow: () => void;
}

const ButtonRegisterMobile = ({ onShow }: buttonRegisterMobileProps) => {
  return (
    <button
      type='button'
      onClick={onShow}
      className='focus:outline-none  bg-[#E76C4A] active:bg-[#e7562d] w-[165px] h-10 rounded-lg 
        flex justify-center items-center space-x-1'
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

export default ButtonRegisterMobile;
