import { ProductIsFavorites } from "../../../../../shared/model/entities/Product"

export default interface ToggleFavouriteProductCartParam {

    productindex: number
    isFavourite: ProductIsFavorites
}