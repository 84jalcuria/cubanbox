import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ButtonSignUp from '@/components/modals/ButtonSignUp';
import InputEmail from '@/components/modals/InputEmail';
import InputUser from '@/components/modals/InputUser';
import InputPasssword from '@/components/modals/InputPassword';
import ErrorMessage from '@/components/modals/ErrorMessage';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useUser } from '@/context/user-context';

interface Message {
  type: string;
  content: string;
}
interface FormData {
  email: string;
  username: string;
  password: string;
  confirmpassword: string;
}

interface signUpProps {
  onClose: () => void;
}

const SignUp = ({ onClose }: signUpProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);
  const router = useRouter();
  const { signUp } = useUser();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  /*Watching for user*/
  useEffect(() => {
    if (user) {
      router.replace('/profile');
    }
  }, [user]);

  /*--------Submit Callback-----------*/
  const handleSignUp: SubmitHandler<FormData> = async (data: FormData) => {
    const { email, username, password } = data;
    setLoading(true);
    setMessage(null);
    const { error, user } = await signUp({ email, password });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    } else {
      /*Here create profile record for user */
      setUser(user);
      /*Close Modal*/
      onClose();
    }
    setLoading(false);
  };

  return (
    <div
      className={`bg-[#262C34] w-[90%] h-[90%] sm:w-[400px] md:w-[450px] rounded-2xl
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

      {/*Form SignUp*/}
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className='w-full flex-grow pb-8 pt-5 px-8 sm:px-16 flex flex-col justify-between items-center'
      >
        {/*Title and description*/}
        <div className='text-white w-full'>
          <h1 className='text-sm sm:text-lg font-light tracking-tighter uppercase'>
            registrate y empieza a entrenar
          </h1>
          <h1 className='mt-1 text-xs sm:text-sm font-light'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          </h1>
        </div>
        {/*Inputs*/}
        <div className='w-full flex flex-col justify-between space-y-7'>
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
          <InputUser
            placeholder='Usuario'
            disabled={loading}
            label='username'
            register={register}
            required={{
              value: true,
              message: 'Requerido.',
            }}
            pattern={{
              value: /^[\dA-Za-z]+[\dA-Za-z\s]{1,50}$/,
            }}
            error={errors.username}
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
          <InputPasssword
            placeholder='Confirmar contraseña'
            disabled={loading}
            label='confirmpassword'
            register={register}
            required={{
              value: true,
              message: 'Requerido.',
            }}
            validate={(value) =>
              value === getValues('password') || 'La contraseña no coincide.'
            }
            minLength={{
              value: 6,
              message: 'La contraseña debe tener mas de 6 caracteres',
            }}
            error={errors.confirmpassword}
          />
        </div>
        {/*---------------Errors Messages---------------------------*/}
        {message?.type === 'error' && (
          <ErrorMessage fontsize='text-sm' message={message.content} />
        )}
        {/*---------------------SignUp Button-----------------------*/}
        <ButtonSignUp onClose={onClose} disabled={loading} />
      </form>
    </div>
  );
};

export default SignUp;

/*

^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$

*/
