import Cart from "../../shared/model/entities/Cart";
import { ProductId } from "../../shared/model/entities/Product";

type AppCart = {

    cartProductIds: ProductId[]
} & Cart | null

export default AppCart