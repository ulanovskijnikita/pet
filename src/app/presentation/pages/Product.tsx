import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router";
import Location from "../router/Location";
import { useEffect, useLayoutEffect } from "react";
import ProductViewModel from "../viewmodel/ProductViewModel";
import FavouriteButton from "../ui/FavouriteButton";
import QuantityButton from "../ui/QuantityButton";
import QuantityForm from "../ui/QuantityForm";
import { runInAction } from "mobx";
import FuncButton from "../ui/FuncButton";
import pages from "../router/pages";
import { useInjection } from "../context/InversifyContext";

const Product = () => {

    const { productId } = useParams()

    const vm = useInjection(ProductViewModel)

    const navigate = useNavigate()

    useEffect(

        () => {

            runInAction(

                () => {

                    vm.setProductDetails = productId ? +productId : 0
                }
            ) 
        }, [productId, vm, vm.getProductQuantity, navigate]
    )

    useLayoutEffect(

        () => {

            vm.unsetProductDetails()
        }, [productId, vm, navigate]
    )

    return (

        <Location>

            <section className="grid px-container gap-[30px] laptop:gap-[50px] desktop:gap-[75px] laptop:px-container-1024">

                {

                    vm.getProductDetails

                        ?
                    
                    <>

                        <h4 className="flex gap-[10px] capitalize">

                            <span>{vm.getProductDetails.category}</span>

                            <span>/</span>
                                
                            <span>{vm.getProductDetails.subcategory}</span>

                            <span>/</span>

                            <span>{vm.getProductDetails.tag}</span>
                        </h4>

                        <div className="w-[310px] grid gap-[15px]">

                            <div className="w-full h-[283px] items-center justify-center bg-bg-cart grid rounded-cart relative">

                                <img className="max-w-[240px] min-w-[150px] max-h-[268px] text-center" src={new URL(import.meta.env.BASE_URL.slice(0, -1) + vm.getProductDetails.img, import.meta.url).href} alt="product-img" />

                                <div className="flex flex-wrap gap-[10px] absolute z-10 top-0 left-0 mx-[15px] mt-[15px]">
                                    
                                    {
                                        vm.getProductDetails.statuses?.map(

                                            (status, index) =>
                                                <span key={index} className="font-functional text-label rounded-[6px] py-[8px] px-[12px] border-[1px] border-[rgba(65,64,62,30)] capitalize">

                                                    {status}
                                                </span>
                                        )
                                    }
                                </div>

                                    <div className="absolute z-10 top-0 right-0 mx-[15px] mt-[15px] *:p-[8px] tablet:*:p-[8px]">
                                        
                                        <FavouriteButton

                                            isFavourite={vm.getProductDetails.isFavorites}
                                            toggleFavourite={() => vm.toggleFavourite()}
                                        />
                                    </div>                           
                            </div>

                            <div>

                                <h4 className="capitalize">{vm.getProductDetails?.tag}</h4>

                                <div className="mt-[4px] mb-[7px] flex gap-[6px] items-center">
                                    
                                    <div className="flex gap-[4px] items-center">

                                        {
                                            Array(5).fill(0).map(

                                                (_value, index) =>
                                                    
                                                    vm.getProductDetails && <span key={index} className={index + 1 <= vm.getProductDetails.rating ? "fill-accent!" : "fill-bg-cart"}>

                                                        <svg width="11" height="12" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                                                        
                                                            <path d="M4.90991 1.118L3.56729 3.96218L0.563373 4.41974C0.0246826 4.50137 -0.191205 5.19523 0.199449 5.59264L2.37272 7.80526L1.8587 10.9308C1.76617 11.4958 2.33571 11.919 2.81272 11.6548L5.5 10.179L8.18729 11.6548C8.66429 11.9169 9.23383 11.4958 9.1413 10.9308L8.62728 7.80526L10.8006 5.59264C11.1912 5.19523 10.9753 4.50137 10.4366 4.41974L7.43271 3.96218L6.09009 1.118C5.84953 0.61103 5.15252 0.604585 4.90991 1.118Z"/>
                                                        </svg>
                                                    </span>
                                            )
                                        }
                                    </div>
                                    
                                    <span className="text-label text-sub-title font-functional">{vm.getProductDetails.rating.toFixed(1)}</span>
                                </div>
                            </div>

                            <div>

                                <p className="w-[80%] text-btn">{vm.getProductDetails.desc}</p>
                            </div>

                            <div className="flex items-center justify-between">

                                <div className="flex w-fit gap-[5px] items-center">

                                    <QuantityButton
                                        
                                        addQuantity={(q) => {
                                            
                                            if (vm.getProductQuantity == 1) return q

                                            return vm.setProductQuantity = q                                    
                                        }}
                                        quantityParam={{

                                            index: 0,
                                            productId: vm.getProductDetails.id,
                                            quantity: -1,
                                            userId: vm.getId
                                        }}
                                    />

                                    <QuantityForm

                                        addQuantity={q => vm.changeProductQuantity = q}
                                        quantityParam={{

                                            index: 0,
                                            productId: vm.getProductDetails.id,
                                            quantity: vm.getProductQuantity,
                                            userId: vm.getId
                                        }}
                                    />

                                    <QuantityButton
                                        
                                        addQuantity={(q) => {

                                            return vm.setProductQuantity = q                                    
                                        }}
                                        quantityParam={{

                                            index: 0,
                                            productId: vm.getProductDetails.id,
                                            quantity: 1,
                                            userId: vm.getId
                                        }}
                                    />
                                </div> 

                                <div>

                                    <h4 className="text-accent font-functional font-light">

                                        {

                                            vm.getProductDetails.priceCurrency + (vm.getProductDetails.priceCount * vm.getProductQuantity).toFixed(2)
                                        }
                                    </h4>
                                </div>
                            </div>

                            <FuncButton
                            
                                handleClick={

                                    () => {

                                        if (vm.getId) {

                                            vm.addToCart()

                                            navigate(`${pages.cart}/${vm.getId}`)
                                        } else {

                                            navigate(`${pages.profile}/${pages.signIn}`)
                                        }
                                    }
                                }
                            >

                                <span>add to cart</span>
                            </FuncButton>
                        </div>
                    </>
                    :

                    <h4>We have no products with this id</h4>
                }
            </section>
        </Location>
    )
}

export default observer(Product)