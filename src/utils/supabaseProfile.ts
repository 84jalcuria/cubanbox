import { supabase } from '@/utils/supabaseClient';
import { PostgrestError } from '@supabase/supabase-js';
import Profile from '@/models/Profile';

export const CreateProfile = async (profile: {
  id: number;
  username: string;
  sex: 'male' | 'female';
  email: string;
}): Promise<PostgrestError | null> => {
  const data = { ...profile, updated_at: new Date() };
  const { error } = await supabase
    .from('profiles')
    .insert([data], { returning: 'minimal', upsert: true });
  const supabaseError = error ?? null;
  return supabaseError;
};

export const GetProfile = async (
  userid: string
): Promise<{ error: PostgrestError | null; data: Profile | null }> => {
  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', userid);
  const supabaseError = error ?? null;
  const supabaseProfile = data?.[0] ?? null;
  return { error: supabaseError, data: supabaseProfile };
};

interface Exist {
  exist: boolean;
  error: PostgrestError;
}

export const ExistUserName = async (username: string): Promise<Exist> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('username')
    .eq('username', username);

  return { exist: !!data?.length, error };
};
