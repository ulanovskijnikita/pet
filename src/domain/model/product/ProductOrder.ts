export type ProductOrderId = number
export type ProductOrderAction = string

export default interface ProductOrder {

    id: ProductOrderId
    action: ProductOrderAction
}