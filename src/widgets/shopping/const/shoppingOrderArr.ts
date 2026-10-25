import ProductOrder from "../../../entities/product/model/ProductOrder";

export type ShoppingOrderArr = {

    action: ProductOrder
    tag: string
    id: number
}

const shoppingOrderArr: ShoppingOrderArr[] = [

    {
        action: "price ascending",
        tag: "shop by price",
        id: 1,
    },

    {
        action: "price descending",
        tag: "shop by price",
        id: 2,
    },

    {
        action: "rating ascending",
        tag: "shop by rating",
        id: 3,
    },

    {
        action: "rating descending",
        tag: "shop by rating",
        id: 4,
    },

    {
        action: "tag ascending",
        tag: "shop by name",
        id: 5,
    },

    {
        action: "tag descending",
        tag: "shop by name",
        id: 6,
    },
]

export default shoppingOrderArr