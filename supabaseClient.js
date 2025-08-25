import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://atypbdqkvadchkixysbp.supabase.co";
const SUPABASE_KEY = "sb_publishable__sgvDoPLCjMSiSvQR5Ar1g_c6KUW_up"; // safe for frontend

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
