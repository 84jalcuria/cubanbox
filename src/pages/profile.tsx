import { useEffect } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/router';
import { useAuth } from '@/state/auth';

const Profile = () => {
  const [user, _] = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log(user);
    if (!user) {
      router.push('/register');
    }
  }, []);

  const signIn = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/register');
    }
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        <button type='submit' className='focus:outline-none p-2 bg-blue-500'>
          Sign Out
        </button>
      </form>
    </div>
  );
};

export default Profile;
