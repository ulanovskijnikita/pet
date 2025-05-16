import { Outlet, useParams } from "react-router"
import Nav from "../ui/nav/Nav"
import container from "../../di/container"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import ProfileViewModel from "../viewmodel/ProfileViewModel"

const Profile = observer(() => {

    const vm = container.get(ProfileViewModel)

    const { userId } = useParams()

    useEffect(

        () => {

            if(userId) {

                vm.setUser(+userId)
            }
            
        }, [vm, userId]
    )

    return (
        <div>

        <header>

            <Nav />
        </header>

        <main>
            {
                userId

                    ?
                
                <>
                    <h2>I am Profile</h2>
                    <h3>And {vm.getUser?.name}</h3>
                </>

                    :
                
                <Outlet />
            }
        </main>            
        </div>
    )
})

export default Profile