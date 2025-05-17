import { Outlet, useParams } from "react-router"
import Nav from "../ui/nav/Nav"
import container from "../../di/container"
import { observer } from "mobx-react-lite"
import { useEffect, useRef } from "react"
import ProfileViewModel from "../viewmodel/ProfileViewModel"
import FormSection from "../ui/FormSection"
import Form from "../ui/Form"
import FormInput from "../ui/FormInput"

const Profile = observer(() => {

    const vm = container.get(ProfileViewModel)

    const { userId } = useParams()

    const nameInput = useRef<HTMLInputElement>(null)

    const emailInput = useRef<HTMLInputElement>(null)

    useEffect(

        () => {

            if (userId && !vm.getUser) vm.setUser(+userId)

            if (vm.getUser) {
                
                if (nameInput.current) nameInput.current.value = vm.getUser.name

                if (emailInput.current) emailInput.current.value = vm.getUser.email
            }            
        }, [vm, userId, nameInput, emailInput, vm.getUser]
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
                
                <FormSection>

                    <h3 className="capitalize w-full">
                        
                        <span className="text-accent">your account</span>
                    </h3>

                    <Form 
                        handleSubmit={

                            () => {}
                        }
                    >

                        <label>

                            <p className="text-sub-title text-label text-start">Name</p>

                            <FormInput inputRef={nameInput} inputPlaceholder="your full name" inputType="text" />
                        </label>
                        

                        <label>

                            <p className="text-sub-title text-label text-start">Email</p>

                            <FormInput inputRef={emailInput} inputPlaceholder="your email address" inputType="email" />
                        </label>
                    </Form>           
                </FormSection>

                    :
                
                <Outlet />
            }
        </main>            
        </div>
    )
})

export default Profile