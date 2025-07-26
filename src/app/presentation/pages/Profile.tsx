import { Outlet, useParams } from "react-router"
import { observer } from "mobx-react-lite"
import { useEffect, useRef } from "react"
import ProfileViewModel from "../viewmodel/ProfileViewModel"
import FormSection from "../ui/FormSection"
import Form from "../ui/Form"
import FormInput from "../ui/FormInput"
import Location from "../router/Location"
import { useInjection } from "../context/InversifyContext"

const Profile = () => {

    const vm = useInjection(ProfileViewModel)

    const { userId } = useParams()

    const nameInput = useRef<HTMLInputElement>(null)

    const emailInput = useRef<HTMLInputElement>(null)

    useEffect(

        () => {

            vm.setUser()

            if (vm.getUser) {
                
                if (nameInput.current) nameInput.current.value = vm.getUser.name

                if (emailInput.current) emailInput.current.value = vm.getUser.email
            }            
        }, [vm, userId, nameInput, emailInput]
    )

    return (

        <Location>

            <div className="-mt-[50px] laptop:-mt-[100px]">

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
            </div>
            
        </Location>
    )
}

export default observer(Profile)