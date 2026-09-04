import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// JINVERSE works fully on placeholder content even with no Supabase project
// connected. `isSupabaseConfigured` lets pages fall back gracefully instead
// of crashing when env vars are missing (e.g. local dev before setup, or a
// preview deploy without secrets configured yet).
export const isSupabaseConfigured = Boolean(url && anonKey)

export const supabase = isSupabaseConfigured ? createClient(url, anonKey) : null

/**
 * Fetch published rows from a table, falling back to placeholder data if
 * Supabase isn't configured yet or the query fails. Never throws.
 */
export async function fetchPublished(table, fallback, { select = '*', order } = {}) {
  if (!isSupabaseConfigured) return fallback
  try {
    let query = supabase.from(table).select(select).eq('status', 'published')
    if (order) query = query.order(order.column, { ascending: order.ascending ?? true })
    const { data, error } = await query
    if (error || !data || data.length === 0) return fallback
    return data
  } catch {
    return fallback
  }
}
