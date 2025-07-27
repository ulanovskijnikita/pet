import { Container } from "inversify";
import { createContext } from "react";

const InversifyContext = createContext<Container | null>(null)

export default InversifyContext