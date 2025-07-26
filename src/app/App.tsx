import { observer } from "mobx-react-lite"
import Router from "./presentation/router/Router"
import { useInjection } from "./presentation/context/InversifyContext"
import AppViewModel from "./presentation/viewmodel/appViewModel/AppViewModel"
import { useEffect } from "react"

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