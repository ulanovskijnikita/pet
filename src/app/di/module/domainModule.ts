import {ContainerModule} from "inversify";
import GetProductByCategoryUseCase from "../../../domain/usecase/GetProductByCategoryUseCase.ts";
import ProductRepositoryImpl from "../../../data/repository/ProductRepositoryImpl.ts";
import SearchProductByTagUseCase from "../../../domain/usecase/SearchProductByTagUseCase.ts";
import GetSecondUseCase from "../../../domain/usecase/GetSecondUseCase.ts";
import EmailServiceImpl from "../../../infrastructure/email/EmailServiceImpl.ts";
import SignInUserUseCase from "../../../domain/usecase/SignInUserUseCase.ts";
import UserRepositoryImpl from "../../../data/repository/UserRepositoryImpl.ts";
import GetUserByIdUseCase from "../../../domain/usecase/GetUserByIdUseCase.ts";
import GetUserUseCase from "../../../domain/usecase/GetUserUseCase.ts";
import ToggleUserFavouriteUseCase from "../../../domain/usecase/ToggleUserFavouriteUseCase.ts";
import RegisterUserUseCase from "../../../domain/usecase/RegisterUserUseCase.ts";
import AddToUserCartUseCase from "../../../domain/usecase/AddToUserCartUseCase.ts";
import GetProductByFilterUseCase from "../../../domain/usecase/GetProductByFilterUseCase.ts";

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
            .bind<SearchProductByTagUseCase>(SearchProductByTagUseCase)
            .toDynamicValue(

                context =>
                    new SearchProductByTagUseCase( context.get(ProductRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<GetSecondUseCase>(GetSecondUseCase)
            .toDynamicValue(

                context =>
                    new GetSecondUseCase(

                        context.get(EmailServiceImpl),
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
            .bind<GetUserByIdUseCase>(GetUserByIdUseCase)
            .toDynamicValue(

                context =>
                    new GetUserByIdUseCase( context.get(UserRepositoryImpl) )
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
            .bind<ToggleUserFavouriteUseCase>(ToggleUserFavouriteUseCase)
            .toDynamicValue(

                context =>
                    new ToggleUserFavouriteUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()

        options
            .bind<RegisterUserUseCase>(RegisterUserUseCase)
            .toDynamicValue(

                context =>
                    new RegisterUserUseCase(

                        context.get(UserRepositoryImpl),
                        context.get(EmailServiceImpl),
                    )
            )
            .inTransientScope()

        options
            .bind<AddToUserCartUseCase>(AddToUserCartUseCase)
            .toDynamicValue(

                context =>
                    new AddToUserCartUseCase( context.get(UserRepositoryImpl) )
            )
            .inTransientScope()
        
        options
            .bind<GetProductByFilterUseCase>(GetProductByFilterUseCase)
            .toDynamicValue(

                context =>
                    new GetProductByFilterUseCase( context.get(ProductRepositoryImpl) )
            )
            .inTransientScope()
    }
)

export default domainModule