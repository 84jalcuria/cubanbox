import { useState, useEffect, useContext, createContext } from 'react';
import { supabase } from '@/utils/supabaseClient';

export const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setUser(session?.user ?? null);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        //console.log(event);
        handleAuthCookies(event, session);
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const handleAuthCookies = async (event, session) => {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  };

  const value = {
    session,
    user,
    signUp: (options) => supabase.auth.signUp(options),
    signIn: (options) => supabase.auth.signIn(options),
    signOut: () => supabase.auth.signOut(),
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserContextProvider.');
  }
  return context;
};
