import { ObservablePersistMMKV } from '@legendapp/state/persist-plugins/mmkv'
import { configureSyncedSupabase } from '@legendapp/state/sync-plugins/supabase'
import { v4 as uuidv4 } from 'uuid'

const generateId = () => uuidv4()
configureSyncedSupabase({
  generateId,
  persist: {
    persist: {
      plugin: ObservablePersistMMKV,
    },
  },
  changesSince: 'last-sync',
  fieldCreatedAt: 'created_at',
  fieldUpdatedAt: 'updated_at',
  // Optionally enable soft deletes
  // fieldDeleted: "deleted",
})
