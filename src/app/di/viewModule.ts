import {ContainerModule} from "inversify";
import GetProductByCategoryUseCase from "../../entities/product/usecase/GetProductByCategoryUseCase.ts";
import ClothingViewModel from "../../widgets/clothing/model/ClothingViewModel.ts";
import SignInViewModel from "../../pages/sign-in/model/SignInViewModel.ts";
import SignInUserUseCase from "../../entities/user/usecase/SignInUserUseCase.ts";
import GetUserUseCase from "../../entities/user/usecase/GetUserUseCase.ts";
import ProfileViewModel from "../../pages/profile/model/ProfileViewModel.ts";
import ToggleFavouriteProductUseCase from "../../entities/user/usecase/ToggleFavouriteProductUseCase.ts";
import RegisterViewModel from "../../pages/register/model/RegisterViewModel.ts";
import RegisterUserUseCase from "../../entities/user/usecase/RegisterUserUseCase.ts";
import FoodiesViewModel from "../../widgets/foodies/model/FoodiesViewModel.ts";
import ShoppingViewModel from "../../widgets/shopping/model/ShoppingViewModel.ts";
import GetProductByFilterUseCase from "../../entities/product/usecase/GetProductByFilterUseCase.ts";
import CartViewModel from "../../pages/cart/model/CartViewModel.ts";
import GetProgressCartUseCase from "../../entities/cart/usecase/GetProgressCartUseCase.ts";
import SetProductQuantityUseCase from "../../entities/cart/usecase/SetProductQuantityUseCase.ts";
import MakeOrderUseCase from "../../entities/cart/usecase/MakeOrderUseCase.ts";
import FavouriteViewModel from "../../pages/favourite/model/FavouriteViewModel.ts";
import GetProductByFavouriteUseCase from "../../entities/product/usecase/GetProductByFavouriteUseCase.ts";
import ProductViewModel from "../../pages/product/model/ProductViewModel.ts";
import GetProductByIdUseCase from "../../entities/product/usecase/GetProductByIdUseCase.ts";
import HistorizingViewModel from "../../widgets/history/model/HistorizingViewModel.ts";
import AppViewModel from "../model/AppViewModel.ts";
import NavViewModel from "../../widgets/nav/model/NavViewModel.ts";
import NavStater from "../../widgets/nav/model/NavStater.ts";
import AppStater from "../model/AppStater.ts";
import SecondViewModel from "../../widgets/second/model/SecondViewModel.ts";
import GetNewUserSecondUseCase from "../../entities/user/usecase/GetNewUserSecondUseCase.ts";
import BannerViewModel from "../../widgets/banner/model/BannerViewModel.ts";
import GetUserHistoryListUseCase from "../../entities/cart/usecase/GetCartHistoryUseCase.ts";
import HeroViewModel from "../../widgets/hero/model/HeroViewModel.ts";
import FooterViewModel from "../../widgets/footer/model/FooterViewModel.ts";
import OrderViewModel from "../../pages/order/model/OrderViewModel.ts";
import GetProductsByCartUseCase from "../../entities/product/usecase/GetProductsByCartUseCase.ts";
import SetProductRatingUseCase from "../../entities/product/usecase/SetProductRatingUseCase.ts";
import SignOutUserUseCase from "../../entities/user/usecase/SignOutUserUseCase.ts";

const viewModule = new ContainerModule(

    options => {

        options
            .bind<ClothingViewModel>(ClothingViewModel)
            .toDynamicValue(

                context =>
                    new ClothingViewModel(

                        context.get(AppViewModel),
                        context.get(NavViewModel),
                        context.get(GetProductByCategoryUseCase),
                        context.get(SetProductQuantityUseCase),
                        context.get(ToggleFavouriteProductUseCase)
                    )
            )
            .inSingletonScope()

        options
            .bind<NavStater>(NavViewModel)
            .toDynamicValue(

                context =>
                    new NavViewModel(

                        context.get(GetUserUseCase),
                        context.get(GetProgressCartUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<AppStater>(AppViewModel)
            .toDynamicValue(

                context =>
                    new AppViewModel(

                        context.get(GetUserUseCase),
                        context.get(GetProgressCartUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<SecondViewModel>(SecondViewModel)
            .toDynamicValue(

                context =>
                    new SecondViewModel(

                        context.get(GetNewUserSecondUseCase),
                        context.get(GetUserUseCase),
                        context.get(AppViewModel)
                    )
            )
            .inSingletonScope()

        options
            .bind<SignInViewModel>(SignInViewModel)
            .toDynamicValue(

                context =>
                    new SignInViewModel(

                        context.get(AppViewModel),
                        context.get(SignInUserUseCase),
                    )
            )
            .inSingletonScope()
        
        options
            .bind<ProfileViewModel>(ProfileViewModel)
            .toDynamicValue(

                context =>
                    new ProfileViewModel(

                        context.get(GetUserUseCase),
                        context.get(SignOutUserUseCase),
                        context.get(AppViewModel),
                        context.get(NavViewModel),
                    )
            )
            .inSingletonScope()

        options
            .bind<CartViewModel>(CartViewModel)
            .toDynamicValue(

                context =>
                    new CartViewModel(

                        context.get(NavViewModel),
                        context.get(AppViewModel),
                        context.get(SetProductQuantityUseCase),
                        context.get(MakeOrderUseCase),
                        context.get(ToggleFavouriteProductUseCase),
                        context.get(HistorizingViewModel),
                    )
            )
            .inSingletonScope()

        options
            .bind<RegisterViewModel>(RegisterViewModel)
            .toDynamicValue(

                context =>
                    new RegisterViewModel(

                        context.get(RegisterUserUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<FoodiesViewModel>(FoodiesViewModel)
            .toDynamicValue(

                context =>
                    new FoodiesViewModel(

                        context.get(AppViewModel),
                        context.get(NavViewModel),
                        context.get(GetProductByCategoryUseCase),
                        context.get(SetProductQuantityUseCase),
                        context.get(ToggleFavouriteProductUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<ShoppingViewModel>(ShoppingViewModel)
            .toDynamicValue(

                context =>
                    new ShoppingViewModel(

                        context.get(NavViewModel),
                        context.get(AppViewModel),
                        context.get(GetProductByFilterUseCase),
                        context.get(SetProductQuantityUseCase),
                        context.get(ToggleFavouriteProductUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<BannerViewModel>(BannerViewModel)
            .toDynamicValue(

                context =>
                    new BannerViewModel(

                        context.get(NavViewModel),
                    )
            )
            .inSingletonScope()

        options
            .bind<FooterViewModel>(FooterViewModel)
            .toDynamicValue(

                context =>
                    new FooterViewModel(

                        context.get(NavViewModel),
                        context.get(AppViewModel),
                    )
            )
            .inSingletonScope()

        options
            .bind<HeroViewModel>(HeroViewModel)
            .toDynamicValue(

                context =>
                    new HeroViewModel(

                        context.get(NavViewModel),
                    )
            )
            .inSingletonScope()

        options
            .bind<OrderViewModel>(OrderViewModel)
            .toDynamicValue(

                context =>
                    new OrderViewModel(

                        context.get(AppViewModel),
                        context.get(NavViewModel),
                        context.get(GetProductsByCartUseCase),
                        context.get(SetProductRatingUseCase),
                        context.get(SetProductQuantityUseCase),
                        context.get(ToggleFavouriteProductUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<FavouriteViewModel>(FavouriteViewModel)
            .toDynamicValue(

                context =>
                    new FavouriteViewModel(

                        context.get(NavViewModel),
                        context.get(AppViewModel),
                        context.get(GetProductByFavouriteUseCase),
                        context.get(SetProductQuantityUseCase),
                        context.get(ToggleFavouriteProductUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<ProductViewModel>(ProductViewModel)
            .toDynamicValue(

                context =>
                    new ProductViewModel(

                        context.get(AppViewModel),
                        context.get(NavViewModel),
                        context.get(GetProductByIdUseCase),
                        context.get(ToggleFavouriteProductUseCase),
                        context.get(SetProductQuantityUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<HistorizingViewModel>(HistorizingViewModel)
            .toDynamicValue(

                context =>
                    new HistorizingViewModel(
                        
                        context.get(GetUserHistoryListUseCase),
                    )
            )
            .inSingletonScope()
    }
)

export default viewModule