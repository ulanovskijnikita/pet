import {Container} from "inversify";
import appModule from "./module/appModule.ts";
import dataModule from "./module/dataModule.ts";
import infrastructureModule from "./module/infrastructureModule.ts";
import domainModule from "./module/domainModule.ts";

const container = new Container()

await container.load(

    appModule,
    dataModule,
    domainModule,
    infrastructureModule,
)

export default container