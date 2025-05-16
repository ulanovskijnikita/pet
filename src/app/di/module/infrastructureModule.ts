import {ContainerModule} from "inversify";
import EmailService from "../../../domain/service/EmailService.ts";
import EmailServiceImpl from "../../../infrastructure/email/EmailServiceImpl.ts";
import emailSend from "../../../infrastructure/email/emailSend.ts";

const infrastructureModule = new ContainerModule(

    options => {

        options
            .bind<EmailService>(EmailServiceImpl)
            .toDynamicValue(

                () => new EmailServiceImpl( emailSend )
            )
            .inSingletonScope()
    }
)

export default infrastructureModule