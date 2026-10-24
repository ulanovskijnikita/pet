import { ContainerModule } from "inversify";
import GetNewUserSecondUseCase from "../usecase/GetNewUserSecondUseCase";
import UserGatewayImpl from "../../../features/user/gateway/UserGatewayImpl";
import UserRepositoryImpl from "../../../features/user/repository/UserRepositoryImpl";
import GetUserUseCase from "../usecase/GetUserUseCase";
import RegisterUserUseCase from "../usecase/RegisterUserUseCase";
import SignInUserUseCase from "../usecase/SignInUserUseCase";
import ToggleFavouriteProductUseCase from "../usecase/ToggleFavouriteProductUseCase";

const entityUserModule = new ContainerModule(({ bind }) => {

    bind<GetNewUserSecondUseCase>( GetNewUserSecondUseCase )
        .toDynamicValue(
            context =>
                new GetNewUserSecondUseCase(

                    context.get( UserGatewayImpl ),
                    context.get( UserRepositoryImpl ),
                )
        )
        .inTransientScope()

    bind<GetUserUseCase>( GetUserUseCase )
        .toDynamicValue(
            context =>
                new GetUserUseCase( context.get( UserRepositoryImpl ))
        )
        .inTransientScope()

    bind<RegisterUserUseCase>( RegisterUserUseCase )
        .toDynamicValue(
            context =>
                new RegisterUserUseCase(

                    context.get( UserRepositoryImpl ),
                    context.get( UserGatewayImpl ),
                )
        )
        .inTransientScope()

    bind<SignInUserUseCase>( SignInUserUseCase )
        .toDynamicValue(
            context =>
                new SignInUserUseCase( context.get( UserRepositoryImpl ))
        )
        .inTransientScope()

    bind<ToggleFavouriteProductUseCase>( ToggleFavouriteProductUseCase )
        .toDynamicValue(
            context =>
                new ToggleFavouriteProductUseCase( context.get( UserRepositoryImpl ))
        )
        .inTransientScope()
})

export default entityUserModule