import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// SUSTITUYE LOS VALORES ENTRE COMILLAS POR TUS CLAVES REALES
// Las encuentras en tu panel de Supabase: Settings -> API
const SUPABASE_URL = 'https://tu-proyecto.supabase.co'; 
const SUPABASE_PUBLISHABLE_KEY = 'tu-clave-anon-aqui';

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: window.localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
