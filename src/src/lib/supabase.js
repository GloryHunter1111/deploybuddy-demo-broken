   import { createClient } from '@supabase/supabase-js'

   // DEMO ONLY: this repo is intentionally broken for DeployBuddy screenshots.
   // The key below is FAKE. It is not a real Supabase key and works nowhere.
   export const supabase = createClient(
     'https://demo-fake-project.supabase.co',
     'eyJDEMO-FAKE-KEY-NOT-REAL-0000000000-0000000000-0000000000-0000000000'
   )
