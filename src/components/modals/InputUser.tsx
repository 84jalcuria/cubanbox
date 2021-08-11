import Image from 'next/image';
import user from '@/assets/input/user.png';
import ErrorMessage from '@/components/modals/ErrorMessage';

const InputUser = ({ disabled, label, register, required, error, pattern }) => {
  return (
    <div className='relative w-full flex flex-col justify-center items-start'>
      <input
        type='text'
        {...register(label, { required, pattern })}
        disabled={disabled}
        placeholder='Usuario'
        className={`w-full py-2 px-12 bg-transparent focus:outline-none border-[1px] ${
          error ? 'border-red-600' : 'border-white'
        } 
        rounded-lg text-gray-400 text-sm font-normal tracking-wide placeholder-gray-500`}
      />
      <div className='absolute w-6 h-5 left-3 top-[9px] transform scale-75'>
        <Image src={user} alt='user icon' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default InputUser;

/*


*/
