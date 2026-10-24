import {ContainerModule} from "inversify";
import UserGateway from "../../../entities/user/gateway/UserGateway.ts";
import UserGatewayImpl from "../../../features/user/gateway/UserGatewayImpl.ts";
import EmailjsSendEmailClient from "../../../features/user/client/sender/EmailjsSendEmailClient.ts";
import AbstractVerifyEmailClient from "../../../features/user/client/verifier/AbstractVerifyEmailClient.ts";
import SendEmailClient from "../../../features/user/client/sender/SendEmailClient.ts";
import VerifyEmailClient from "../../../features/user/client/verifier/VerifyEmailClient.ts";

const servicesModule = new ContainerModule(

    options => {

        options
            .bind<UserGateway>(UserGatewayImpl)
            .toDynamicValue(

                (context) => new UserGatewayImpl( 

                    context.get(EmailjsSendEmailClient),
                    context.get(AbstractVerifyEmailClient),
                )
            )
            .inSingletonScope()

        options
            .bind<SendEmailClient>(EmailjsSendEmailClient)
            .toDynamicValue(

                () => new EmailjsSendEmailClient()
            )
            .inSingletonScope()

        options
            .bind<VerifyEmailClient>(AbstractVerifyEmailClient)
            .toDynamicValue(

                () => new AbstractVerifyEmailClient()
            )
            .inSingletonScope()
    }
)

export default servicesModule