import {ContainerModule} from "inversify";
import ProductRepository from "../../../domain/repository/ProductRepository.ts";
import ProductRepositoryImpl from "../../../data/repository/ProductRepositoryImpl.ts";
import SupabaseProductStorage from "../../../data/storage/product/SupabaseProductStorage.ts";
import ProductStorage from "../../../data/storage/product/ProductStorage.ts";
import supabaseClient from "../../../data/storage/consts/supabase/supabaseClient.ts";
import UserRepository from "../../../domain/repository/UserRepository.ts";
import UserRepositoryImpl from "../../../data/repository/UserRepositoryImpl.ts";
import SupabaseUserStorage from "../../../data/storage/user/SupabaseUserStorage.ts";
import UserStorage from "../../../data/storage/user/UserStorage.ts";
import SessionUserCashe from "../../../data/storage/user/SessionUserCashe.ts";
import UserCashe from "../../../data/storage/user/UserCashe.ts";

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