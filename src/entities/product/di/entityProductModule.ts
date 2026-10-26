import { ContainerModule } from "inversify";
import GetProductByCategoryUseCase from "../usecase/GetProductByCategoryUseCase";
import ProductRepositoryImpl from "../../../features/product/repository/ProductRepositoryImpl";
import GetProductByFavouriteUseCase from "../usecase/GetProductByFavouriteUseCase";
import GetProductByFilterUseCase from "../usecase/GetProductByFilterUseCase";
import GetProductByIdUseCase from "../usecase/GetProductByIdUseCase";
import SetProductRatingUseCase from "../usecase/SetProductRatingUseCase";
import GetProductsByCartUseCase from "../usecase/GetProductsByCartUseCase";

const entityProductModule = new ContainerModule(({bind}) => {

    bind<GetProductByCategoryUseCase>( GetProductByCategoryUseCase )
        .toDynamicValue(
            context =>
                new GetProductByCategoryUseCase( context.get( ProductRepositoryImpl ) )
        )
        .inTransientScope()

    bind<GetProductByFavouriteUseCase>( GetProductByFavouriteUseCase )
        .toDynamicValue(
            context =>
                new GetProductByFavouriteUseCase( context.get( ProductRepositoryImpl ) )
        )
        .inTransientScope()

    bind<GetProductByFilterUseCase>( GetProductByFilterUseCase )
        .toDynamicValue(
            context =>
                new GetProductByFilterUseCase( context.get( ProductRepositoryImpl ) )
        )
        .inTransientScope()

    bind<GetProductByIdUseCase>( GetProductByIdUseCase )
        .toDynamicValue(
            context =>
                new GetProductByIdUseCase( context.get( ProductRepositoryImpl ) )
        )
        .inTransientScope()

    bind<SetProductRatingUseCase>( SetProductRatingUseCase )
        .toDynamicValue(
            context =>
                new SetProductRatingUseCase( context.get( ProductRepositoryImpl ) )
        )
        .inTransientScope()

    bind<GetProductsByCartUseCase>( GetProductsByCartUseCase )
        .toDynamicValue(
            context =>
                new GetProductsByCartUseCase( context.get( ProductRepositoryImpl ) )
        )
        .inTransientScope()
})

export default entityProductModule