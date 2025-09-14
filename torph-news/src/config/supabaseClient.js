import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pncqammfatxunmgsbzrc.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY3FhbW1mYXR4dW5tZ3NienJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU2MzA2NTMsImV4cCI6MjA3MTIwNjY1M30.fyGof4gyfs7iGp2FGi7epjfSHHdsfPUp6YRK42iLsuo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;