import { createClient } from "@supabase/supabase-js";

export default createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL,
  process.env.EXPO_PUBLIC_SUPABASE_API_KEY
);
