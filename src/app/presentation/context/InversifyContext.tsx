import { Container, ServiceIdentifier } from "inversify";
import { createContext, ReactNode, useContext } from "react";

const InversifyContext = createContext<Container | null>(null);

type InversifyProviderProps = {

    children: ReactNode
    container: Container
}

export const InversifyProvider = (props: InversifyProviderProps) => {

    return (
        
        <InversifyContext.Provider value={props.container}>

            {props.children}
        </InversifyContext.Provider>
    )
}

export const useInjection = <T extends unknown>(identifier: ServiceIdentifier<T>): T => {

    const container = useContext(InversifyContext)

    return container!.get<T>(identifier);
}