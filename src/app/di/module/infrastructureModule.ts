import {ContainerModule} from "inversify";
import EmailGateway from "../../../domain/gateway/EmailGateway.ts";
import EmailGatewayImpl from "../../../services/gateway/EmailGatewayImpl.ts";
import emailSend from "../../../services/client/consts/email/emailjs.ts";

const infrastructureModule = new ContainerModule(

    options => {

        options
            .bind<EmailGateway>(EmailGatewayImpl)
            .toDynamicValue(

                () => new EmailGatewayImpl( emailSend )
            )
            .inSingletonScope()
    }
)

export default infrastructureModule