import { createClient, type SupportedStorage } from '@supabase/supabase-js'

const supabaseUrl = 'https://verbvfbphkajifvwzoch.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlcmJ2ZmJwaGthamlmdnd6b2NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MDY3NTQsImV4cCI6MjA2NTk4Mjc1NH0.gm1D3pvjwp9aQqXTJUvGGO0uAbNj-Jb2KuPcfc87Hm4'

import { MMKV } from 'react-native-mmkv'
import type { Database } from '~/supabase/database.types'

export const storage = new MMKV({
  id: `supabase`,
})

const mmkvSupabaseSupportedStorage = {
  setItem: (key, data) => storage.set(key, data),
  getItem: (key) => storage.getString(key) ?? null,
  removeItem: (key) => storage.delete(key),
} satisfies SupportedStorage

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: mmkvSupabaseSupportedStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

export default supabase
