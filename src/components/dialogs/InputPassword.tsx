import { useState } from 'react';
import Image from 'next/image';
import password from '@/assets/input/password.png';
import notview from '@/assets/input/not-view.png';
import view from '@/assets/input/view.png';

const InputPassword = ({
  placeholder,
  disabled,
  label,
  error,
  register,
  required,
  validate,
  minLength,
}) => {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <div className='relative w-full flex flex-col justify-center items-start'>
      <input
        type={viewPassword ? 'text' : 'password'}
        {...register(label, { required, validate, minLength })}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full py-2 px-12 bg-transparent focus:outline-none border-[1px] ${
          error ? 'border-red-600' : 'border-white'
        }  
        rounded-lg text-gray-400 text-sm font-normal tracking-wide placeholder-gray-500`}
      />
      <div className='absolute w-6 h-6 left-3 top-[6px] transform scale-75'>
        <Image
          src={password}
          alt='password icon'
          layout='fill'
          objectFit='cover'
        />
      </div>
      {viewPassword ? (
        <button
          type='button'
          onClick={() => setViewPassword(!viewPassword)}
          className='absolute w-6 h-6 right-3 top-[6px] transform scale-75 focus:outline-none'
        >
          <Image src={view} alt='view icon' layout='fill' objectFit='cover' />
        </button>
      ) : (
        <button
          type='button'
          onClick={() => setViewPassword(!viewPassword)}
          className='absolute w-6 h-6 right-3 top-[6px] transform scale-75 focus:outline-none'
        >
          <Image
            src={notview}
            alt='notview icon'
            layout='fill'
            objectFit='cover'
          />
        </button>
      )}
    </div>
  );
};

export default InputPassword;

/*


*/
