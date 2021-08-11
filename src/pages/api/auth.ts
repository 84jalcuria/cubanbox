import { supabase } from '@/utils/supabaseClient';

const handler = (req, res) => {
  //console.log(req.body);
  supabase.auth.api.setAuthCookie(req, res);
};

export default handler;
