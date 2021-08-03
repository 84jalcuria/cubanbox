import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/router';

const Register = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const router = useRouter();
  return (
    <>
      {!emailSubmitted ? (
        <div>
          {error && <div>Some Error. Please try againt</div>}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const { error } = await supabase.auth.signIn({ email });
              if (error) {
                setError(true);
              } else {
                setEmailSubmitted(true);
              }
            }}
          >
            <input
              type='text'
              placeholder='Type email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type='submit'
              className='focus:outline-none p-2 bg-gray-600'
            >
              Magic Link
            </button>
          </form>
          <div>-OR-</div>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const { error } = await supabase.auth.signIn({
                provider: 'google',
              });
              if (error) {
                setError(true);
              }
            }}
          >
            <button
              type='submit'
              className='focus:outline-none p-2 bg-blue-500'
            >
              Google Login
            </button>
          </form>
        </div>
      ) : (
        <div>Check your Email inbox</div>
      )}
    </>
  );
};

export default Register;
