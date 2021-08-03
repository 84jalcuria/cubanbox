import { useEffect } from 'react';
import { useAuth } from '@/state/auth';
import { supabase } from '@/utils/supabaseClient';

export const useAuthStateChange = () => {
  const [user, setUser] = useAuth(); //This state is global from GalactyState
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handlerAuthCookies(event, session);
        checkUser();
      }
    );
    return () => authListener?.unsubscribe();
  }, []);

  const checkUser = () => {
    const user = supabase.auth.user();
    setUser(user);
  };
  const handlerAuthCookies = async (event, session) => {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  };
};
