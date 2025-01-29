type RatingHistoryId = number
type Rating = 1 | 2 | 3 | 4 | 5

interface RatingHistory {
    id: RatingHistoryId
    productId: ProductId
    userId: UserId
    rating: Rating
}