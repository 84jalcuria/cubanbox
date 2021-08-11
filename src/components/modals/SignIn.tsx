import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import InputEmail from '@/components/modals/InputEmail';
import InputPasssword from '@/components/modals/InputPassword';
import ButtonSignIn from '@/components/modals/ButtonSignIn';
import ErrorMessage from '@/components/modals/ErrorMessage';
import { useUser } from '@/context/user-context';
import { useRouter } from 'next/router';

interface Message {
  type: string;
  content: string;
}
interface FormData {
  email: string;
  password: string;
}

interface signInProps {
  onClose: () => void;
}

const SignIn = ({ onClose }: signInProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const { signIn } = useUser();
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
    } else {
      setUser(user);
      /*Close Modal*/
      onClose();
    }
    setLoading(false);
  };

  return (
    <div
      className={`bg-[#262C34] w-[90%] h-[70%] sm:w-[370px] md:w-[450px] rounded-2xl
    flex flex-col justify-between items-center shadow-2xl ${
      loading ? 'animate-pulse' : null
    }`}
    >
      <button
        onClick={onClose}
        className='focus:outline-none self-end mt-4 mr-4'
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
      {/*Form SignIp*/}
      <form
        className='w-full flex-grow mb-8 mt-3 px-8 sm:px-16 flex flex-col justify-between items-center'
        onSubmit={handleSubmit(handleSignIn)}
      >
        {/*Logo*/}
        <div className='bg-white w-24 h-24 rounded-full' />
        {/*Inputs*/}
        <div className='w-full flex flex-col justify-between space-y-7 '>
          {/*-----------------SignUp Inputs---------------------------*/}
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
        <ButtonSignIn onClose={onClose} disabled={loading} />
      </form>
    </div>
  );
};

export default SignIn;
