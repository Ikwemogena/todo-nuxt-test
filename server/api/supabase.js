import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fkvnvhdjidzlfhimwqpo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrdm52aGRqaWR6bGZoaW13cXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMjM0NzUsImV4cCI6MjAwMjc5OTQ3NX0.wcN8iPzD4e_0sueun1BAs4puPc6vbPg4OMQdFf3MLy4';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
