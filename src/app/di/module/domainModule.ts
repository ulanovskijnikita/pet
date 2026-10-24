import {ContainerModule} from "inversify";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase.ts";
import ProductRepositoryImpl from "../../../features/product/repository/ProductRepositoryImpl.ts";
import GetNewUserSecondUseCase from "../../../entities/user/usecase/GetNewUserSecondUseCase.ts";
import UserGatewayImpl from "../../../features/user/gateway/UserGatewayImpl.ts";
import SignInUserUseCase from "../../../entities/user/usecase/SignInUserUseCase.ts";
import UserRepositoryImpl from "../../../features/user/repository/UserRepositoryImpl.ts";
import GetUserUseCase from "../../../entities/user/usecase/GetUserUseCase.ts";
import ToggleFavouriteProductUseCase from "../../../entities/user/usecase/ToggleFavouriteProductUseCase.ts";
import RegisterUserUseCase from "../../../entities/user/usecase/RegisterUserUseCase.ts";
import AddToProgressCartUseCase from "../../../entities/cart/usecase/SetProductQuantityUseCase.ts";
import GetProductByFilterUseCase from "../../../domain/usecase/GetProductByFilterUseCase.ts";
import GetProgressCartUseCase from "../../../entities/cart/usecase/GetProgressCartUseCase.ts";
import SetCartLengthUseCase from "../../../entities/cart/usecase/SetCartLengthUseCase.ts";
import ChangeQuantityCartProductUseCase from "../../../entities/cart/usecase/ChangeQuantityCartProductUseCase.ts";
import MakeOrderUseCase from "../../../entities/cart/usecase/MakeOrderUseCase.ts";
import GetProductByFavouriteUseCase from "../../../domain/usecase/GetProductByFavouriteUseCase.ts";
import GetProductByIdUseCase from "../../../domain/usecase/GetProductByIdUseCase.ts";
import GetUserHistoryListUseCase from "../../../entities/cart/usecase/GetCartHistoryUseCase.ts";
import GetProductsByCartUseCase from "../../../domain/usecase/GetProductsByCartUseCase.ts";
import SetProductRatingUseCase from "../../../domain/usecase/SetProductRatingUseCase.ts";

const domainModule = new ContainerModule(

    options => {

        options
            .bind<GetProductByCategoryUseCase>(GetProductByCategoryUseCase)
            .toDynamicValue(

                context =>
                    new GetProductByCategoryUseCase( context.get(ProductRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<GetNewUserSecondUseCase>(GetNewUserSecondUseCase)
            .toDynamicValue(

                context =>
                    new GetNewUserSecondUseCase(

                        context.get(UserGatewayImpl),
                        context.get(UserRepositoryImpl)
                    )
            )
            .inTransientScope()
        
        options
            .bind<SignInUserUseCase>(SignInUserUseCase)
            .toDynamicValue(

                context =>
                    new SignInUserUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<GetUserUseCase>(GetUserUseCase)
            .toDynamicValue(

                context =>
                    new GetUserUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<ToggleFavouriteProductUseCase>(ToggleFavouriteProductUseCase)
            .toDynamicValue(

                context =>
                    new ToggleFavouriteProductUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<RegisterUserUseCase>(RegisterUserUseCase)
            .toDynamicValue(

                context =>
                    new RegisterUserUseCase(

                        context.get(UserRepositoryImpl),
                        context.get(UserGatewayImpl),
                    )
            )
            .inTransientScope()

        options
            .bind<AddToProgressCartUseCase>(AddToProgressCartUseCase)
            .toDynamicValue(

                context =>
                    new AddToProgressCartUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()
        
        options
            .bind<GetProductByFilterUseCase>(GetProductByFilterUseCase)
            .toDynamicValue(

                context =>
                    new GetProductByFilterUseCase( context.get(ProductRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<GetProgressCartUseCase>(GetProgressCartUseCase)
            .toDynamicValue(

                context =>
                    new GetProgressCartUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<SetCartLengthUseCase>(SetCartLengthUseCase)
            .toDynamicValue(

                context =>
                    new SetCartLengthUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<ChangeQuantityCartProductUseCase>(ChangeQuantityCartProductUseCase)
            .toDynamicValue(

                context =>
                    new ChangeQuantityCartProductUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<MakeOrderUseCase>(MakeOrderUseCase)
            .toDynamicValue(

                context =>
                    new MakeOrderUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<GetProductByFavouriteUseCase>(GetProductByFavouriteUseCase)
            .toDynamicValue(

                context =>
                    new GetProductByFavouriteUseCase( context.get(ProductRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<GetProductByIdUseCase>(GetProductByIdUseCase)
            .toDynamicValue(

                context =>
                    new GetProductByIdUseCase( context.get(ProductRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<GetUserHistoryListUseCase>(GetUserHistoryListUseCase)
            .toDynamicValue(

                context =>
                    new GetUserHistoryListUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()
        
        options
            .bind<GetProductsByCartUseCase>(GetProductsByCartUseCase)
            .toDynamicValue(

                context =>
                    new GetProductsByCartUseCase( context.get(ProductRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<SetProductRatingUseCase>(SetProductRatingUseCase)
            .toDynamicValue(

                context =>
                    new SetProductRatingUseCase( context.get(ProductRepositoryImpl) )
            )
            .inTransientScope()
    }
)

export default domainModule