import {ContainerModule} from "inversify";
import ProductRepository from "../../../domain/repository/ProductRepository.ts";
import ProductRepositoryImpl from "../../../features/product/repository/ProductRepositoryImpl.ts";
import SupabaseProductStorage from "../../../features/product/storage/SupabaseProductStorage.ts";
import ProductStorage from "../../../features/storage/product/ProductStorage.ts";
import supabaseClient from "../../../shared/lib/supabase/supabaseClient.ts";
import UserRepository from "../../../entities/user/repository/UserRepository.ts";
import UserRepositoryImpl from "../../../features/user/repository/UserRepositoryImpl.ts";
import SupabaseUserStorage from "../../../features/storage/user/SupabaseUserStorage.ts";
import UserStorage from "../../../features/storage/user/UserStorage.ts";
import SessionUserCashe from "../../../features/storage/user/SessionUserCashe.ts";
import UserCashe from "../../../features/storage/user/UserCashe.ts";

const dataModule = new ContainerModule(

    options => {

        options
            .bind<ProductRepository>(ProductRepositoryImpl)
            .toDynamicValue(

                context => new ProductRepositoryImpl( context.get(SupabaseProductStorage) )
            )
            .inSingletonScope()

        options
            .bind<ProductStorage>(SupabaseProductStorage)
            .toDynamicValue(

                () => new SupabaseProductStorage( supabaseClient )
            )
            .inSingletonScope()

        options
            .bind<UserRepository>(UserRepositoryImpl)
            .toDynamicValue(

                context => new UserRepositoryImpl(

                    context.get(SupabaseUserStorage),
                    context.get(SessionUserCashe)
                )
            )
            .inSingletonScope()

        options
            .bind<UserStorage>(SupabaseUserStorage)
            .toDynamicValue(

                () => new SupabaseUserStorage( supabaseClient )
            )
            .inSingletonScope()

        options
            .bind<UserCashe>(SessionUserCashe)
            .toDynamicValue(

                () => new SessionUserCashe()
            )
            .inSingletonScope()
    }
)

export default dataModule