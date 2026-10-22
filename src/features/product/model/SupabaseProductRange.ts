export type SupabaseProductLimit = number
export type SupabaseProductOffset = number | null

export default interface SupabaseProductRange {

    limit: SupabaseProductLimit
    offset: SupabaseProductOffset
}