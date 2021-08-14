import { supabase } from '@/utils/supabaseClient';
import { PostgrestError } from '@supabase/supabase-js';

interface Profile {
  id: number;
  username: string;
  sex: 'male' | 'female';
  email: string;
}

export const CreateProfile = async (
  profile: Profile
): Promise<PostgrestError> => {
  const data = { ...profile, updated_at: new Date() };
  const { error } = await supabase
    .from('profiles')
    .insert([data], { returning: 'minimal', upsert: true });
  return error;
};

export const GetProfile = async (userid: string): Promise<Profile | any> => {
  const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', userid);
  return { profile: data?.[0], error };
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
