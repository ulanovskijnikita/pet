import { ProductId } from "./Product"
import { UserId } from "./User"

export type RatingHistoryId = number
export type Rating = 1 | 2 | 3 | 4 | 5

export interface RatingHistory {
    id: RatingHistoryId
    productId: ProductId
    userId: UserId
    rating: Rating
}