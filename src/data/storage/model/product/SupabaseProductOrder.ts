export type SupabaseProductOrderId = number
export type SupabaseProductOrderAction = string

export default interface SupabaseProductOrder {

    id: SupabaseProductOrderId
    action: SupabaseProductOrderAction
}