‎import { createClient } from '@supabase/supabase-js'
‎
‎const supabaseUrl = "https://maegtbpmsgymnrmscyj.supabase.co"
‎const supabaseKey = "sb_publishable_5P6el9FSjYrAMkXH3bfEMg_bNhUDq5Y"
‎
‎export const supabase = createClient(supabaseUrl, supabaseKey)
‎
