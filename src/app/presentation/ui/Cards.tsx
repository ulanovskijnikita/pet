import { observer } from "mobx-react-lite"
import { ReactNode } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import Product, { ProductId } from "../../../domain/model/product/Product"
import { ProductOffset } from "../../../domain/model/product/ProductRange"
import Loader from "./Loader"
import Card from "./Card"

type CardsProps = {

    altTitle: ReactNode
    products: Product[] | null
    setProduct: (offset: ProductOffset) => void
    hasMore: boolean
    addToCart(id: ProductId): void
    toggleFavourite(id: ProductId, index: number): void
}

const Cards = (props: CardsProps) => {

    return (

        <div className="relative">

            {

                !props.products && <Loader />
            }
        
            {

                (props.products && !!props.products.length) && <InfiniteScroll

                    className="p-[.5px] tablet:p-[1px] grid gap-[30px] laptop:gap-[50px]"
                    dataLength={props.products.length}
                    hasMore={props.hasMore}
                    loader={<h4>A little more...</h4>}
                    next={

                        () => {

                            props.setProduct(props.products?.length ?? null)
                        }
                    }
                >

                    <ul className="w-full grid gap-[30px] tablet:gap-[32px] tablet:grid-cols-2 laptop:grid-cols-3 tablet:justify-self-center tablet:w-fit desktop:grid-cols-4 desktop:gap-[45px]">

                        {
                            props.products.map(

                                (product, index) =>
                                    <Card

                                        addToCart={() => props.addToCart(product.id)}
                                        toggleFavourite={() => props.toggleFavourite(product.id, index)}
                                        key={product.id}
                                        product={product}
                                    />              
                            )
                        }
                    </ul>
                </InfiniteScroll>
            }

            {

                (props.products && !props.products.length) && <h4>{props.altTitle}</h4>
            }
        </div>
    )
}

export default observer(Cards)