import { useState, useEffect } from 'react';
import { toggleSignInDialog } from '@/state/dialog';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '@/context/user-context';
import { useRouter } from 'next/router';
import InputEmail from '@/components/dialogs/InputEmail';
import InputPasssword from '@/components/dialogs/InputPassword';
import ButtonSignIn from '@/components/dialogs/ButtonSignIn';
import ErrorMessage from '@/components/dialogs/ErrorMessage';

interface Message {
  type: string;
  content: string;
}
interface FormData {
  email: string;
  password: string;
}

const SignInDialog = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const { user, signIn } = useUser();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (user) {
      router.replace('/profile');
    }
  }, [user]);

  const handleSignIn: SubmitHandler<FormData> = async (data: FormData) => {
    const { email, password } = data;
    setLoading(true);
    setMessage(null);
    const { error } = await signIn({ email, password });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    toggleSignInDialog(false);
    setLoading(false);
  };

  return (
    <div className='fixed z-50 inset-0 bg-gray-800/40 overflow-auto flex justify-center items-center'>
      <div
        className={`mt-10 p-4 bg-[#262C34] w-[90%] max-w-sm rounded-xl flex flex-col justify-center items-stretch space-y-3
          ${loading ? 'animate-pulse' : null}
          `}
      >
        {/*-------------------Close Button------------------------*/}
        <button
          disabled={loading}
          onClick={() => toggleSignInDialog(false)}
          className='focus:outline-none self-end'
        >
          <svg
            className='max-h-7 w-7 text-[#E76C4A]'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
        {/*--------------------------------------------------------*/}
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className='w-full px-4 pb-4 flex flex-col justify-between items-stretch space-y-7'
        >
          {/*Logo*/}
          <div className='self-center bg-gray-900/30 w-24 h-24 rounded-full' />
          {/*-----------------SignUp Inputs---------------------------*/}
          <div className='w-full flex flex-col justify-between space-y-7'>
            <InputEmail
              placeholder='Correo electronico'
              disabled={loading}
              label='email'
              register={register}
              required={{ value: true, message: 'Requerido.' }}
              pattern={{
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              }}
              error={errors.email}
            />
            <InputPasssword
              placeholder='Contraseña'
              disabled={loading}
              label='password'
              register={register}
              required={{
                value: true,
                message: 'Requerido.',
              }}
              validate={() => null}
              minLength={{
                value: 6,
                message: 'La contraseña debe tener mas de 6 caracteres',
              }}
              error={errors.password}
            />
          </div>
          {/*---------------Errors Messages---------------------------*/}
          {message?.type === 'error' && (
            <ErrorMessage fontsize='text-sm' message={message.content} />
          )}
          {/*---------------------SignUp Button-----------------------*/}
          <div className='w-full pt-2'>
            <ButtonSignIn disabled={loading} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInDialog;
