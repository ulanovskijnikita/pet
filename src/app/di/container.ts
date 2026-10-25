import {Container} from "inversify";
import viewModule from "./viewModule";
import entityCartModule from "../../entities/cart/di/entityCartModule";
import entityProductModule from "../../entities/product/di/entityProductModule";
import entityUserModule from "../../entities/user/di/entityUserModule";
import featureCartModule from "../../features/cart/di/featureCartModule";
import featureProductModule from "../../features/product/di/featureProductModule";
import featureUserModule from "../../features/user/di/featureUserModule";

const container = new Container()

await container.load(
    
    viewModule,
    entityCartModule,
    entityProductModule,
    entityUserModule,
    featureCartModule,
    featureProductModule,
    featureUserModule,
)

export default container