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
import GetUserCartLength from "../../../domain/usecase/GetUserCartLength.ts";
import RegisterViewModel from "../../presentation/viewmodel/RegisterViewModel.ts";
import RegisterUserUseCase from "../../../domain/usecase/RegisterUserUseCase.ts";

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
                        context.get(GetUserCartLength),
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
    }
)

export default appModule