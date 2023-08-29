import { createClient } from '@supabase/supabase-js';
import type { Database } from './supabase.types';

export const supabase = createClient<Database>(
	'https://rswacitbwuzuosbxayaq.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzd2FjaXRid3V6dW9zYnhheWFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE4NjQyMjYsImV4cCI6MjAwNzQ0MDIyNn0.BKM8MAz22ZOoHc0o_3Of25j_YFzYQMUK-1rvC8V8RbM'
);
