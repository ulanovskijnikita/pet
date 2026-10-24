import { observer } from "mobx-react-lite"
import Router from "./router/Router"
import AppViewModel from "./model/AppViewModel"
import { useEffect } from "react"
import useInjection from "../shared/context/inversify/useInjection"

const App = () => {

  const vm = useInjection(AppViewModel)

  useEffect(() => {

    vm.setId()
  }, [vm])

  return (

    <>

        <Router />
    </>
  )
}

export default observer(App)