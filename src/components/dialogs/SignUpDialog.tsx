import { toggleSignUpDialog } from '@/state/dialog';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ButtonSignUp from '@/components/dialogs/ButtonSignUp';
import InputEmail from '@/components/dialogs/InputEmail';
import InputUser from '@/components/dialogs/InputUser';
import InputPasssword from '@/components/dialogs/InputPassword';
import ErrorMessage from '@/components/dialogs/ErrorMessage';
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
  sex: 'male' | 'female';
}

const SignUpDialog = () => {
  const { user } = useUser();
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
    const { email, username, password, sex } = data;
    setLoading(true);
    setMessage(null);
    const { error, user } = await signUp({ email, password });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    } else {
      /*Here create profile record for user */
    }
    setLoading(false);
  };

  return (
    <>
      <div className='fixed z-50 inset-0 bg-gray-800/40 overflow-auto flex justify-center items-center'>
        <div
          className={`mt-10 p-4 bg-[#262C34] w-[90%] max-w-sm rounded-xl flex flex-col justify-center items-stretch space-y-3
          ${loading ? 'animate-pulse' : null}
          `}
        >
          {/*-------------------Close Button------------------------*/}
          <button
            disabled={loading}
            onClick={() => toggleSignUpDialog(false)}
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
            onSubmit={handleSubmit(handleSignUp)}
            className='w-full px-4 pb-4 flex flex-col justify-between items-stretch space-y-7'
          >
            {/*Title and description*/}
            <div className='text-white w-full'>
              <h1 className='text-sm sm:text-lg font-light tracking-tighter uppercase'>
                registrate y empieza a entrenar
              </h1>
              <h1 className='mt-1 text-sm sm:text-sm font-light'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit
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
                  value === getValues('password') ||
                  'La contraseña no coincide.'
                }
                minLength={{
                  value: 6,
                  message: 'La contraseña debe tener mas de 6 caracteres',
                }}
                error={errors.confirmpassword}
              />
              {/*Select Sex*/}
              <select
                {...register('sex', {
                  required: { value: true, message: 'Requerido' },
                })}
                defaultValue='male'
                className={`w-full py-2 px-12 bg-transparent focus:outline-none border-[1px] ${
                  errors.sex ? 'border-red-600' : 'border-white'
                } 
                  rounded-lg text-gray-400 text-sm font-normal tracking-wide placeholder-gray-500`}
              >
                <option value='male'>Hombre</option>
                <option value='female'>Mujer</option>
              </select>
            </div>
            {/*---------------Errors Messages---------------------------*/}
            {message?.type === 'error' && (
              <ErrorMessage fontsize='text-sm' message={message.content} />
            )}
            {/*---------------------SignUp Button-----------------------*/}
            <div className='w-full pt-2'>
              <ButtonSignUp disabled={loading} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpDialog;
