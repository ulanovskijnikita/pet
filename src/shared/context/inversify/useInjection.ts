import { useContext } from "react"
import InversifyContext from "./InversifyContext"
import { ServiceIdentifier } from "inversify"

const useInjection = <T extends object>(identifier: ServiceIdentifier<T>): T => {

    const container = useContext(InversifyContext)

    return container!.get<T>(identifier)
}

export default useInjection