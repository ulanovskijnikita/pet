import { ContainerModule } from "inversify";
import CasheUser from "../cashe/model/CasheUser";
import SessionUserCashe from "../cashe/SessionUserCashe";
import SendEmailClient from "../client/sender/SendEmailClient";
import EmailjsSendEmailClient from "../client/sender/EmailjsSendEmailClient";
import VerifyEmailClient from "../client/verifier/VerifyEmailClient";
import AbstractVerifyEmailClient from "../client/verifier/AbstractVerifyEmailClient";
import UserGatewayImpl from "../gateway/UserGatewayImpl";
import UserRepositoryImpl from "../repository/UserRepositoryImpl";
import SupabaseUserStorage from "../storage/SupabaseUserStorage";
import supabaseClient from "../../../shared/lib/supabase/supabaseClient";

const featureUserModule = new ContainerModule(({ bind }) => {

    bind<CasheUser>( SessionUserCashe ).toSelf().inSingletonScope()

    bind<SendEmailClient>( EmailjsSendEmailClient ).toSelf().inSingletonScope()

    bind<VerifyEmailClient>( AbstractVerifyEmailClient ).toSelf().inSingletonScope()

    bind<UserGatewayImpl>( UserGatewayImpl ).toDynamicValue(

        context =>  new UserGatewayImpl(

            context.get( EmailjsSendEmailClient ),
            context.get( AbstractVerifyEmailClient )
        )
    ).inSingletonScope()

    bind<UserRepositoryImpl>( UserRepositoryImpl ).toDynamicValue(
        
        context =>  new UserRepositoryImpl(

            context.get( SupabaseUserStorage ),
            context.get( SessionUserCashe ),
        )
    ).inSingletonScope()

    bind<SupabaseUserStorage>( SupabaseUserStorage ).toDynamicValue(
        
        () =>  new SupabaseUserStorage( supabaseClient )
    ).inSingletonScope()
})

export default featureUserModule