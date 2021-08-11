import React from 'react';
import Image from 'next/image';
import email from '@/assets/input/email.png';
import ErrorMessage from '@/components/modals/ErrorMessage';

const InputEmail = ({
  disabled,
  label,
  error,
  register,
  required,
  pattern,
}) => {
  return (
    <div className='relative w-full flex flex-col justify-center items-start'>
      <input
        type='email'
        {...register(label, { required, pattern })}
        disabled={disabled}
        placeholder='Correo electronico'
        className={`w-full py-2 px-12 bg-transparent focus:outline-none focus:bg-transparent border-[1px] ${
          error ? 'border-red-600' : 'border-white'
        } 
        rounded-lg text-gray-400 text-sm font-normal tracking-wide placeholder-gray-500`}
      />
      <div className='absolute w-6 h-5 left-3 top-[9px] transform scale-75'>
        <Image src={email} alt='email icon' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
};

export default InputEmail;

/*


*/
