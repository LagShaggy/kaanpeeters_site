import { Database } from './supabase/supabase.types';

export type Writing = Database['public']['Tables']['writings']['Row'];
export type Event = Database['public']['Tables']['events']['Row'];
