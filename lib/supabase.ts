import { createClient } from '@supabase/supabase-js'

// Service-role client — bypassa RLS, usato solo nelle API routes server-side
export function getServiceSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}
