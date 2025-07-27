import { observer } from "mobx-react-lite"
import Router from "./presentation/router/Router"
import AppViewModel from "./presentation/viewmodel/appViewModel/AppViewModel"
import { useEffect } from "react"
import useInjection from "./presentation/context/inversify/useInjection"

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