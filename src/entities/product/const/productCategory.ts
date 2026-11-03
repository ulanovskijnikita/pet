import ProductCategory, { ProductCategoryValue } from "../model/ProductCategory"

const productCategory: {[keys in ProductCategoryValue]: ProductCategory} = {

    accessories: {

        id: 1,
        value: "accessories",
    },
    clothing: {

        id: 2,
        value: "clothing",
    },
    foodies: {

        id: 3,
        value: "foodies",
    },
}

export default productCategory