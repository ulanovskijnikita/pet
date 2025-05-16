import {UserId} from "../user/User.ts";
import {ProductTag} from "./Product.ts";
import ProductRange from "./ProductRange.ts";

export default interface SearchProductParam extends ProductRange{

    userId: UserId
    tag: ProductTag
}