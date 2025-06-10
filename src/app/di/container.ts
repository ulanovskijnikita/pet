import {Container} from "inversify";
import appModule from "./module/appModule.ts";
import dataModule from "./module/dataModule.ts";
import servicesModule from "./module/servicesModule.ts";
import domainModule from "./module/domainModule.ts";

const container = new Container()

await container.load(

    appModule,
    dataModule,
    domainModule,
    servicesModule,
)

export default container