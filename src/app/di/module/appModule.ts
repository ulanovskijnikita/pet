import {ContainerModule} from "inversify";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase.ts";
import ClothingViewModel from "../../presentation/viewmodel/ClothingViewModel.ts";
import SignInViewModel from "../../presentation/viewmodel/SignInViewModel.ts";
import SignInUserUseCase from "../../../entites/user/usecase/SignInUserUseCase.ts";
import GetUserUseCase from "../../../entites/user/usecase/GetUserUseCase.ts";
import ProfileViewModel from "../../presentation/viewmodel/ProfileViewModel.ts";
import ToggleFavouriteProductUseCase from "../../../entites/user/usecase/ToggleFavouriteProductUseCase.ts";
import RegisterViewModel from "../../presentation/viewmodel/RegisterViewModel.ts";
import RegisterUserUseCase from "../../../entites/user/usecase/RegisterUserUseCase.ts";
import FoodiesViewModel from "../../presentation/viewmodel/FoodiesViewModel.ts";
import ShoppingViewModel from "../../presentation/viewmodel/ShoppingViewModel.ts";
import GetProductByFilterUseCase from "../../../domain/usecase/GetProductByFilterUseCase.ts";
import CartViewModel from "../../presentation/viewmodel/CartViewModel.ts";
import GetUserCartUseCase from "../../../entites/cart/usecase/GetUserCartUseCase.ts";
import SetCartLengthUseCase from "../../../entites/cart/usecase/SetCartLengthUseCase.ts";
import ChangeQuantityCartProductUseCase from "../../../entites/cart/usecase/ChangeQuantityCartProductUseCase.ts";
import GetAnOrderUseCase from "../../../entites/cart/usecase/GetAnOrderUseCase.ts";
import FavouriteViewModel from "../../presentation/viewmodel/FavouriteViewModel.ts";
import GetProductByFavouriteUseCase from "../../../domain/usecase/GetProductByFavouriteUseCase.ts";
import ProductViewModel from "../../presentation/viewmodel/ProductViewModel.ts";
import GetProductByIdUseCase from "../../../domain/usecase/GetProductByIdUseCase.ts";
import HistorizingViewModel from "../../presentation/viewmodel/HistorizingViewModel.ts";
import AppViewModel from "../../presentation/viewmodel/appViewModel/AppViewModel.ts";
import NavViewModel from "../../presentation/viewmodel/navViewModel/NavViewModel.ts";
import AddToProgressCartUseCase from "../../../entites/cart/usecase/AddToProgressCartUseCase.ts";
import NavStater from "../../presentation/viewmodel/navViewModel/NavStater.ts";
import AppStater from "../../presentation/viewmodel/appViewModel/AppStater.ts";
import SecondViewModel from "../../presentation/viewmodel/SecondViewModel.ts";
import GetNewUserSecondUseCase from "../../../entites/user/usecase/GetNewUserSecondUseCase.ts";
import BannerViewModel from "../../presentation/viewmodel/BannerViewModel.ts";
import GetUserHistoryListUseCase from "../../../entites/cart/usecase/GetUserHistoryListUseCase.ts";
import HeroViewModel from "../../presentation/viewmodel/HeroViewModel.ts";
import FooterViewModel from "../../presentation/viewmodel/FooterViewModel.ts";
import OrderViewModel from "../../presentation/viewmodel/OrderViewModel.ts";
import GetProductsByCartUseCase from "../../../domain/usecase/GetProductsByCartUseCase.ts";
import SetProductRatingUseCase from "../../../domain/usecase/SetProductRatingUseCase.ts";

const appModule = new ContainerModule(

    options => {

        options
            .bind<ClothingViewModel>(ClothingViewModel)
            .toDynamicValue(

                context =>
                    new ClothingViewModel(

                        context.get(AppViewModel),
                        context.get(NavViewModel),
                        context.get(GetProductByCategoryUseCase),
                        context.get(AddToProgressCartUseCase),
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
                    )
            )
            .inSingletonScope()

        options
            .bind<AppStater>(AppViewModel)
            .toDynamicValue(

                context =>
                    new AppViewModel(

                        context.get(GetUserUseCase),
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
                        context.get(GetUserCartUseCase),
                        context.get(SetCartLengthUseCase),
                        context.get(ChangeQuantityCartProductUseCase),
                        context.get(GetAnOrderUseCase),
                        context.get(ToggleFavouriteProductUseCase),
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
                        context.get(AddToProgressCartUseCase),
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
                        context.get(AddToProgressCartUseCase),
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
                        context.get(AddToProgressCartUseCase),
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
                        context.get(AddToProgressCartUseCase),
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
                        context.get(AddToProgressCartUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<HistorizingViewModel>(HistorizingViewModel)
            .toDynamicValue(

                context =>
                    new HistorizingViewModel(

                        context.get(AppViewModel),
                        context.get(GetUserHistoryListUseCase),
                    )
            )
            .inSingletonScope()
    }
)

export default appModule