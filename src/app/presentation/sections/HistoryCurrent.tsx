import { observer } from "mobx-react-lite";
import GetProductsByCartRes from "../../../domain/model/product/GetProductsByCartRes";
import GetProductsByCartParam from "../../../domain/model/product/GetProductsByCartParam";
import { useEffect } from "react";
import { UserCartId } from "../../../domain/model/user/UserCartPreview";
import container from "../../di/container";
import AppViewModel from "../../AppViewModel";
import { DEFAULT_USER_ID } from "../../../domain/model/user/User";
import { Link } from "react-router";
import pages from "../router/pages";
import FuncButton from "../ui/FuncButton";
import { DEFAULT_QUANTITY } from "../../../domain/model/user/AddToUserCartParam";
import FavouriteButton from "../ui/FavouriteButton";
import { SetProductRatingParam } from "../viewmodel/HistoryViewModel";

type HistoryCurrentProps = {

    list: () => GetProductsByCartRes[]
    getList: (param: GetProductsByCartParam) => GetProductsByCartParam
    cartId: UserCartId
    setRating: (param: SetProductRatingParam) => SetProductRatingParam
}

const HistoryCurrent = observer((props: HistoryCurrentProps) => {

    const appVm = container.get(AppViewModel)

    useEffect(

        () => {

            props.getList({

                cartId: props.cartId,
                userId: appVm.getUser?.id ?? DEFAULT_USER_ID
            })
        }, [props, appVm]
    )

    return (

        <section>

            <ul className="w-full grid gap-[30px] tablet:gap-[32px] tablet:grid-cols-2 laptop:grid-cols-3 tablet:justify-self-center tablet:w-fit desktop:grid-cols-4 desktop:gap-[45px]">

                {

                    props.list().map(

                        (product, productIndex) => {

                            return (

                                <li key={product.id} className="even:justify-self-end desktop:even:justify-self-auto grid gap-[20px] w-fit">

                                    <Link to={'/' + pages.product + '/' + product.id} className="grid gap-[20px]">

                                        <div className="w-[310px] h-[283px] items-center justify-center bg-bg-cart grid rounded-cart relative">

                                            <img className="max-w-[240px] min-w-[150px] max-h-[268px] text-center" src={new URL(import.meta.env.BASE_URL.slice(0, -1) + product.img, import.meta.url).href} alt="product-img" />

                                            <div className="flex flex-wrap gap-[10px] absolute z-10 top-0 left-0 mx-[15px] mt-[15px]">
                                                
                                                {
                                                    product.statuses?.map(

                                                        (status, index) =>
                                                            <span key={index} className="font-functional text-label rounded-[6px] py-[8px] px-[12px] border-[1px] border-[rgba(65,64,62,30)] capitalize">

                                                                {status}
                                                            </span>
                                                    )
                                                }
                                            </div>

                                            {

                                                product.userRating != null &&
                                                    <div className="absolute bottom-0 left-0 right-0 mx-[15px] mb-[15px] z-10 flex justify-between">

                                                        {
                                                            Array(5).fill(0).map(

                                                                (_value, index) =>
                                                                    <span
                                                                    
                                                                        key={index}
                                                                        onClick={(event) => {

                                                                            event.preventDefault()

                                                                            event.stopPropagation()

                                                                            props.setRating({

                                                                                index: productIndex,
                                                                                list: props.list(),
                                                                                productId: product.id,
                                                                                rating: (index + 1),
                                                                                userId: appVm.getUser?.id ?? DEFAULT_USER_ID
                                                                            })
                                                                        }}
                                                                        className={index + 1 <= product.userRating! ? "fill-accent!" : "fill-main"}
                                                                    >

                                                                        <svg className="w-[30px] aspect-square" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                                                                        
                                                                            <path d="M4.90991 1.118L3.56729 3.96218L0.563373 4.41974C0.0246826 4.50137 -0.191205 5.19523 0.199449 5.59264L2.37272 7.80526L1.8587 10.9308C1.76617 11.4958 2.33571 11.919 2.81272 11.6548L5.5 10.179L8.18729 11.6548C8.66429 11.9169 9.23383 11.4958 9.1413 10.9308L8.62728 7.80526L10.8006 5.59264C11.1912 5.19523 10.9753 4.50137 10.4366 4.41974L7.43271 3.96218L6.09009 1.118C5.84953 0.61103 5.15252 0.604585 4.90991 1.118Z"/>
                                                                        </svg>
                                                                    </span>
                                                        )
                                                    }
                                                    </div>
                                            }
                                            
                                        </div>

                                        <div>

                                            <h4 className="capitalize">{product.tag}</h4>

                                            <div className="mt-[4px] mb-[7px] flex gap-[6px] items-center">
                                                
                                                <div className="flex gap-[4px] items-center">

                                                    {
                                                        Array(5).fill(0).map(

                                                            (_value, index) =>
                                                                <span key={index} className={index + 1 <= product.rating ? "fill-accent!" : "fill-bg-cart"}>

                                                                    <svg width="11" height="12" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                                                                    
                                                                        <path d="M4.90991 1.118L3.56729 3.96218L0.563373 4.41974C0.0246826 4.50137 -0.191205 5.19523 0.199449 5.59264L2.37272 7.80526L1.8587 10.9308C1.76617 11.4958 2.33571 11.919 2.81272 11.6548L5.5 10.179L8.18729 11.6548C8.66429 11.9169 9.23383 11.4958 9.1413 10.9308L8.62728 7.80526L10.8006 5.59264C11.1912 5.19523 10.9753 4.50137 10.4366 4.41974L7.43271 3.96218L6.09009 1.118C5.84953 0.61103 5.15252 0.604585 4.90991 1.118Z"/>
                                                                    </svg>
                                                                </span>
                                                        )
                                                    }
                                                </div>
                                                
                                                <span className="text-label text-sub-title font-functional">{product.rating.toFixed(1)}</span>
                                            </div>

                                            <h4 className="text-accent font-functional font-light">{product.priceCurrency + product.priceCount.toFixed(2)}</h4>
                                        </div>
                                    </Link>                               

                                    <menu className="flex gap-[10px] items-center">

                                        <FuncButton
                                            handleClick={
                                            
                                                () => {

                                                    appVm.addToCart({

                                                        productId: product.id,
                                                        quantity: DEFAULT_QUANTITY,
                                                        userId: appVm.getUser?.id ?? DEFAULT_USER_ID,
                                                    })
                                                }
                                            }
                                        >
                                            
                                            <span>add to cart</span>
                                        </FuncButton>

                                        <FavouriteButton

                                            toggleParam={{

                                                productIndex: productIndex,
                                                productId: product.id,
                                                userId: appVm.getUser?.id ?? DEFAULT_USER_ID,
                                                list: props.list()
                                            }}
                                            isFavourite={product.isFavorites}
                                            toggleFavourite={(param) => appVm.toggleFavouriteProduct = param}
                                        />
                                    </menu>
                                </li>
                            )
                        }
                    )
                }
            </ul>
            
        </section>
    )
})

export default HistoryCurrent