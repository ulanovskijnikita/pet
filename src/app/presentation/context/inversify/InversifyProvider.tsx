import { Container } from "inversify"
import { ReactNode } from "react"
import InversifyContext from "./InversifyContext"

type InversifyProviderProps = {

    children: ReactNode
    container: Container
}

const InversifyProvider = (props: InversifyProviderProps) => {

    return (
        
        <InversifyContext.Provider value={props.container}>

            {props.children}
        </InversifyContext.Provider>
    )
}

export default InversifyProvider