type UserId = number
type UserName = string
type UserEmail = string
type UserStatus = "new" | "old"

interface User {
    id: UserId
    name: UserName
    email: UserEmail
    status: UserStatus
    favourites: Product[]
    ratings: Rating[]
}