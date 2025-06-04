import {ContainerModule} from "inversify";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase.ts";
import ClothingViewModel from "../../presentation/viewmodel/ClothingViewModel.ts";
import SignInViewModel from "../../presentation/viewmodel/SignInViewModel.ts";
import SignInUserUseCase from "../../../domain/usecase/SignInUserUseCase.ts";
import AppViewModel from "../../AppViewModel.ts";
import GetUserUseCase from "../../../domain/usecase/GetUserUseCase.ts";
import ProfileViewModel from "../../presentation/viewmodel/ProfileViewModel.ts";
import GetUserByIdUseCase from "../../../domain/usecase/GetUserByIdUseCase.ts";
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase.ts";
import RegisterViewModel from "../../presentation/viewmodel/RegisterViewModel.ts";
import RegisterUserUseCase from "../../../domain/usecase/RegisterUserUseCase.ts";
import AddToUserCartUseCase from "../../../domain/usecase/AddToUserCartUseCase.ts";
import FoodiesViewModel from "../../presentation/viewmodel/FoodiesViewModel.ts";
import HomeViewModel from "../../presentation/viewmodel/HomeViewModel.ts";
import GetSecondUseCase from "../../../domain/usecase/GetSecondUseCase.ts";
import ShopViewModel from "../../presentation/viewmodel/ShopViewModel.ts";
import GetProductByFilterUseCase from "../../../domain/usecase/GetProductByFilterUseCase.ts";
import CartViewModel from "../../presentation/viewmodel/CartViewModel.ts";
import GetUserCartUseCase from "../../../domain/usecase/GetUserCartUserCase.ts";
import SetQuantityCartProductUseCase from "../../../domain/usecase/SetQuantityCartProductUseCase.ts";
import ChangeQuantityCartProductUseCase from "../../../domain/usecase/ChangeQuantityCartProductUseCase.ts";
import GetAnOrderUseCase from "../../../domain/usecase/GetAnOrderUseCase.ts";
import FavouriteViewModel from "../../presentation/viewmodel/FavouriteViewModel.ts";
import GetProductByFavouriteUseCase from "../../../domain/usecase/GetProductByFavouriteUseCase.ts";
import ProductViewModel from "../../presentation/viewmodel/ProductViewModel.ts";
import GetProductByIdUseCase from "../../../domain/usecase/GetProductByIdUseCase.ts";
import HistoryViewModel from "../../presentation/viewmodel/HistoryViewModel.ts";
import GetUserHistoryListUseCase from "../../../domain/usecase/GetUserHistoryListUseCase.ts";
import GetProductsByCartUseCase from "../../../domain/usecase/GetProductsByCartUseCase.ts";
import SetProductRatingUseCase from "../../../domain/usecase/SetProductRatingUseCase.ts";

const appModule = new ContainerModule(

    options => {

        options
            .bind<ClothingViewModel>(ClothingViewModel)
            .toDynamicValue(

                context =>
                    new ClothingViewModel(

                        context.get(GetProductByCategoryUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<SignInViewModel>(SignInViewModel)
            .toDynamicValue(

                context =>
                    new SignInViewModel(

                        context.get(SignInUserUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<AppViewModel>(AppViewModel)
            .toDynamicValue(

                context =>
                    new AppViewModel(

                        context.get(GetUserUseCase),
                        context.get(ToggleUserFavouriteUseCase),
                        context.get(AddToUserCartUseCase),
                    )
            )
            .inSingletonScope()
        
        options
            .bind<ProfileViewModel>(ProfileViewModel)
            .toDynamicValue(

                context =>
                    new ProfileViewModel(

                        context.get(GetUserByIdUseCase),
                        context.get(AppViewModel),
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

                        context.get(GetProductByCategoryUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<HomeViewModel>(HomeViewModel)
            .toDynamicValue(

                context =>
                    new HomeViewModel(

                        context.get(GetSecondUseCase),
                        context.get(AppViewModel),
                    )
            )
            .inSingletonScope()

        options
            .bind<ShopViewModel>(ShopViewModel)
            .toDynamicValue(

                context =>
                    new ShopViewModel(

                        context.get(GetProductByFilterUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<CartViewModel>(CartViewModel)
            .toDynamicValue(

                context =>
                    new CartViewModel(

                        context.get(GetUserCartUseCase),
                        context.get(SetQuantityCartProductUseCase),
                        context.get(ChangeQuantityCartProductUseCase),
                        context.get(AppViewModel),
                        context.get(GetAnOrderUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<FavouriteViewModel>(FavouriteViewModel)
            .toDynamicValue(

                context =>
                    new FavouriteViewModel(

                        context.get(GetProductByFavouriteUseCase),
                        context.get(ToggleUserFavouriteUseCase)
                    )
            )
            .inSingletonScope()

        options
            .bind<ProductViewModel>(ProductViewModel)
            .toDynamicValue(

                context =>
                    new ProductViewModel(

                        context.get(GetProductByIdUseCase),
                    )
            )
            .inSingletonScope()

        options
            .bind<HistoryViewModel>(HistoryViewModel)
            .toDynamicValue(

                context =>
                    new HistoryViewModel(

                        context.get(GetUserHistoryListUseCase),
                        context.get(GetProductsByCartUseCase),
                        context.get(SetProductRatingUseCase),
                    )
            )
            .inSingletonScope()
    }
)

export default appModule