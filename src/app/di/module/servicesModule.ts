import {ContainerModule} from "inversify";
import EmailGateway from "../../../domain/gateway/EmailGateway.ts";
import EmailGatewayImpl from "../../../services/gateway/EmailGatewayImpl.ts";
import EmailjsSendEmailClient from "../../../services/client/email/EmailjsSendEmailClient.ts";
import AbstractVerifyEmailClient from "../../../services/client/email/AbstractVerifyEmailClient.ts";
import SendEmailClient from "../../../services/client/email/SendEmailClient.ts";
import VerifyEmailClient from "../../../services/client/email/VerifyEmailClient.ts";

const servicesModule = new ContainerModule(

    options => {

        options
            .bind<EmailGateway>(EmailGatewayImpl)
            .toDynamicValue(

                (context) => new EmailGatewayImpl( 

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