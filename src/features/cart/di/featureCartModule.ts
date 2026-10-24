import { ContainerModule } from "inversify";
import CartRepositoryImpl from "../repository/CartRepositoryImpl";
import SupabaseCartStorage from "../storage/SupabaseCartStorage";
import SessionCartCashe from "../cashe/SessionCartCashe";
import CartCashe from "../cashe/CartCashe";
import CartStorage from "../storage/CartStorage";
import supabaseClient from "../../../shared/lib/supabase/supabaseClient";

const featureCartModule = new ContainerModule(({ bind }) => {

    bind<CartRepositoryImpl>( CartRepositoryImpl ).toDynamicValue(

        context =>
            new CartRepositoryImpl(

                context.get( SupabaseCartStorage ),
                context.get( SessionCartCashe ),
            )
    ).inSingletonScope()

    bind<CartCashe>( SessionCartCashe ).toSelf().inSingletonScope()

    bind<CartStorage>( SupabaseCartStorage ).toDynamicValue(

        () =>
            new SupabaseCartStorage( supabaseClient )
    ).inSingletonScope()
})

export default featureCartModule