import { Outlet, useNavigate, useParams } from "react-router"
import { observer } from "mobx-react-lite"
import { useEffect, useRef } from "react"
import ProfileViewModel from "../model/ProfileViewModel"
import FormSection from "../../../shared/ui/FormSection"
import Form from "../../../shared/ui/Form"
import FormInput from "../../../shared/ui/FormInput"
import Location from "../../../app/router/Location"
import useInjection from "../../../shared/context/inversify/useInjection"
import FuncButton from "../../../shared/ui/FuncButton"
import pages from "../../../app/router/pages"

const Profile = () => {

    const vm = useInjection(ProfileViewModel)

    const { userId } = useParams()

    const nameInput = useRef<HTMLInputElement>(null)

    const emailInput = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

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

                            <FuncButton
                            
                                handleClick={() => {

                                    vm.signOut()
                                    
                                    navigate(pages.home)
                                }}
                            >

                                <span>Sign out</span>
                            </FuncButton>
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