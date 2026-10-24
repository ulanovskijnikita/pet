import { ContainerModule } from "inversify";
import ProductRepositoryImpl from "../repository/ProductRepositoryImpl";
import SupabaseProductStorage from "../storage/SupabaseProductStorage";
import supabaseClient from "../../../shared/lib/supabaseClient";

const featureProductModule = new ContainerModule(({ bind }) => {

    bind<ProductRepositoryImpl>(ProductRepositoryImpl)
        .toDynamicValue(
            context =>
                new ProductRepositoryImpl( context.get( SupabaseProductStorage ) )
        )
        .inSingletonScope()

    bind<SupabaseProductStorage>(SupabaseProductStorage)
        .toDynamicValue(

            () => new SupabaseProductStorage( supabaseClient )
        )
        .inSingletonScope()
})

export default featureProductModule