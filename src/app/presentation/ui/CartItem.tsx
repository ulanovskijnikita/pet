import { observer } from "mobx-react-lite";
import UserCart from "../../../domain/model/user/UserCart";
import FavouriteButton from "./FavouriteButton";
import QuantityButton from "./QuantityButton";
import QuantityForm from "./QuantityForm";
import { Link } from "react-router";
import pages from "../router/pages";
import { memo } from "react";
import { ProductId } from "../../../domain/model/product/Product";
import SetQuantityCartProductParam from "../../../domain/model/user/SetQuantityCartProductParam";

type CartItemsProps = {

    product: UserCart
    productIndex: number
    toggleFavourite(productId: ProductId): void
    setQuantityCartProduct(quantity: SetQuantityCartProductParam): void
    changeQuantityCartProduct(quantity: SetQuantityCartProductParam): void
}

const CartItems = (props: CartItemsProps) => {

    return (
        
        <li className="grid-cols-3 grid gap-[5px]">

            <Link to={'/' + pages.product + '/' + props.product.id} className="col-span-2 grid tablet:flex tablet:gap-[15px] tablet:w-fit gap-[5px] grid-cols-2">

                <div className="w-[110px] aspect-square laptop:w-[150px] items-center justify-center bg-bg-cart grid rounded-cart">

                    <img

                        className="laptop:w-[130px] text-center"
                        src={
                            
                            new URL( import.meta.env.BASE_URL.slice(0, -1) + props.product.img, import.meta.url ).href
                        }
                        alt="product-img"
                    />
                </div>

                <div className="flex flex-col justify-between">

                    <h4 className="capitalize max-w-[95px] laptop:max-w-[120px] desktop:max-w-[140px] min-h-[55px]">{props.product.tag}</h4>

                    <div className="mt-[4px] mb-[7px] flex items-center gap-[4px]">

                        {
                            Array(5).fill(0).map(

                                (_value, index) =>
                                    <span key={index} className={index + 1 <= props.product.rating ? "fill-accent!" : "fill-bg-cart"}>

                                        <svg width="11" height="12" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                                        
                                            <path d="M4.90991 1.118L3.56729 3.96218L0.563373 4.41974C0.0246826 4.50137 -0.191205 5.19523 0.199449 5.59264L2.37272 7.80526L1.8587 10.9308C1.76617 11.4958 2.33571 11.919 2.81272 11.6548L5.5 10.179L8.18729 11.6548C8.66429 11.9169 9.23383 11.4958 9.1413 10.9308L8.62728 7.80526L10.8006 5.59264C11.1912 5.19523 10.9753 4.50137 10.4366 4.41974L7.43271 3.96218L6.09009 1.118C5.84953 0.61103 5.15252 0.604585 4.90991 1.118Z"/>
                                        </svg>
                                    </span>
                            )
                        }

                        <span className="text-label text-sub-title font-functional">{props.product.rating.toFixed(1)}</span>
                    </div>

                    <h4 className="text-accent font-functional font-light">{props.product.priceCurrency + props.product.priceCount.toFixed(2)}</h4>
                </div>
            </Link>

            <div className="flex flex-col items-end justify-between">

                <div className="w-fit *:p-[8px] tablet:*:p-[8px]">

                    <FavouriteButton

                        isFavourite={props.product.isFavorites}
                        toggleFavourite={() => props.toggleFavourite(props.product.id)}
                    />
                </div>
                
                <div className="flex w-fit gap-[5px]">

                    <QuantityButton

                        addQuantity={(quantity) => props.setQuantityCartProduct(quantity)}
                        productId={props.product.id}
                        productIndex={props.productIndex}
                        productQuantity={-1}
                    />

                    <QuantityForm

                        addQuantity={(quantity) => props.changeQuantityCartProduct(quantity)}
                        productId={props.product.id}
                        productIndex={props.productIndex}
                        productQuantity={props.product.quantity}
                    />

                    <QuantityButton

                        addQuantity={(quantity) => props.setQuantityCartProduct(quantity)}
                        productId={props.product.id}
                        productIndex={props.productIndex}
                        productQuantity={1}
                    />
                </div>

                <div>

                    <h4 className="text-accent font-functional font-light">
                        
                        {
                        
                            props.product.priceCurrency + (props.product.priceCount * props.product.quantity).toFixed(2)
                        }
                    </h4>
                </div>
            </div>
        </li>
    )
}

export default memo( observer(CartItems) )