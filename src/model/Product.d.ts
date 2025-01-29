type ProductId = number
type ProductPriceCurrency = string
type ProductPriceCount = number
type ProductRating = number
type ProductTag = string
type ProductDesc = string
type ProductImg = string

type ProductStatus = "new" | "sold" | "sale" | null

type ProductsGotByCategory = Product[]
type ProductsGotByUserFavourites = Product[]
type ProductsGotByTag = Product[]


interface Product {
    id: ProductId
    priceCurrency: ProductPriceCurrency
    priceCount: ProductPriceCount
    rating: ProductRating
    tag: ProductTag
    desc: ProductDesc
    img: ProductImg
    status: ProductStatus
    category: Category[]
}