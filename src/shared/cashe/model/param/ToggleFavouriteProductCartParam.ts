import { CasheUserId } from "../../../model/cashe/CasheUser"
import { CasheProductId, CasheProductIsFavorites } from "../CasheProduct"

export default interface ToggleFavouriteProductCartParam {

    userId: CasheUserId
    productId: CasheProductId
    isFavourite: CasheProductIsFavorites
}