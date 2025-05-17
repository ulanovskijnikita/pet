import { observer } from "mobx-react-lite";
import { useParams } from "react-router";

const Product = observer(() => {

    const { productId } = useParams()

    return (

        <section>

            <h1>I am Product</h1>
        
            <h2>My id is {productId}</h2>
        </section>
    )
})

export default Product