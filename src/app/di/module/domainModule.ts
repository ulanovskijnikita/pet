import {ContainerModule} from "inversify";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase.ts";
import ProductRepositoryImpl from "../../../features/product/repository/ProductRepositoryImpl.ts";
import GetNewUserSecondUseCase from "../../../entites/user/usecase/GetNewUserSecondUseCase.ts";
import UserGatewayImpl from "../../../services/gateway/UserGatewayImpl.ts";
import SignInUserUseCase from "../../../entites/user/usecase/SignInUserUseCase.ts";
import UserRepositoryImpl from "../../../features/repository/UserRepositoryImpl.ts";
import GetUserUseCase from "../../../entites/user/usecase/GetUserUseCase.ts";
import ToggleFavouriteProductUseCase from "../../../entites/user/usecase/ToggleFavouriteProductUseCase.ts";
import RegisterUserUseCase from "../../../entites/user/usecase/RegisterUserUseCase.ts";
import AddToProgressCartUseCase from "../../../entites/cart/usecase/AddToProgressCartUseCase.ts";
import GetProductByFilterUseCase from "../../../domain/usecase/GetProductByFilterUseCase.ts";
import GetUserCartUseCase from "../../../entites/cart/usecase/GetUserCartUseCase.ts";
import SetCartLengthUseCase from "../../../entites/cart/usecase/SetCartLengthUseCase.ts";
import ChangeQuantityCartProductUseCase from "../../../entites/cart/usecase/ChangeQuantityCartProductUseCase.ts";
import GetAnOrderUseCase from "../../../entites/cart/usecase/GetAnOrderUseCase.ts";
import GetProductByFavouriteUseCase from "../../../domain/usecase/GetProductByFavouriteUseCase.ts";
import GetProductByIdUseCase from "../../../domain/usecase/GetProductByIdUseCase.ts";
import GetUserHistoryListUseCase from "../../../entites/cart/usecase/GetUserHistoryListUseCase.ts";
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
            .bind<GetUserCartUseCase>(GetUserCartUseCase)
            .toDynamicValue(

                context =>
                    new GetUserCartUseCase( context.get(UserRepositoryImpl) )
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
            .bind<GetAnOrderUseCase>(GetAnOrderUseCase)
            .toDynamicValue(

                context =>
                    new GetAnOrderUseCase( context.get(UserRepositoryImpl) )
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