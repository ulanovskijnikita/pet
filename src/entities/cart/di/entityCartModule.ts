import { ContainerModule } from "inversify";
import GetCartHistoryUseCase from "../usecase/GetCartHistoryUseCase";
import CartRepositoryImpl from "../../../features/cart/repository/CartRepositoryImpl";
import GetProgressCartUseCase from "../usecase/GetProgressCartUseCase";
import MakeOrderUseCase from "../usecase/MakeOrderUseCase";
import SetProductQuantityUseCase from "../usecase/SetProductQuantityUseCase";

const entityCartModule = new ContainerModule(({ bind }) => {

    bind<GetCartHistoryUseCase>( GetCartHistoryUseCase ).toDynamicValue(

        context =>
            new GetCartHistoryUseCase( context.get( CartRepositoryImpl ) )
    ).inTransientScope()

    bind<GetProgressCartUseCase>( GetProgressCartUseCase ).toDynamicValue(

        context =>
            new GetProgressCartUseCase( context.get( CartRepositoryImpl ) )
    ).inTransientScope()

    bind<MakeOrderUseCase>( MakeOrderUseCase ).toDynamicValue(

        context =>
            new MakeOrderUseCase( context.get( CartRepositoryImpl ) )
    ).inTransientScope()

     bind<SetProductQuantityUseCase>( SetProductQuantityUseCase ).toDynamicValue(

        context =>
            new SetProductQuantityUseCase( context.get( CartRepositoryImpl ) )
    ).inTransientScope()
})

export default entityCartModule