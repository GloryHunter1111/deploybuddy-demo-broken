   import { createClient } from '@supabase/supabase-js'

   // DEMO ONLY: this repo is intentionally broken for DeployBuddy screenshots.
   // The key below is FAKE and does not work anywhere.
   const supabaseUrl = 'https://demo-fake-project.supabase.co'
   const supabaseKey = 'DEMO-FAKE-SERVICE-ROLE-KEY-NOT-REAL-0000000000'

   export const supabase = createClient(supabaseUrl, supabaseKey)
