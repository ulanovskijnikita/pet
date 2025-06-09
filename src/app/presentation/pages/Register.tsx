import { Link, useNavigate } from "react-router"
import FormSection from "../ui/FormSection"
import FormInput from "../ui/FormInput"
import Form from "../ui/Form"
import pages from "../router/pages"
import container from "../../di/container"
import RegisterViewModel from "../viewmodel/RegisterViewModel"
import { observer } from "mobx-react-lite"
import { useEffect, useRef } from "react"
import FormButton from "../ui/FormButton"

const Register = observer(() => {

    const vm = container.get(RegisterViewModel)

    const navigate = useNavigate()

    const nameInput = useRef<HTMLInputElement>(null)

    const emailInput = useRef<HTMLInputElement>(null)

    const passInput = useRef<HTMLInputElement>(null)

    const passAgainInput = useRef<HTMLInputElement>(null)

    useEffect(

        () => {

            if ( vm.getResult?.result ) {

                setTimeout(() => {

                    vm.setResult = null
                    
                    navigate(`${pages.profile}/${pages.signIn}`)
                }, 1000)
                
            } 
        }, [vm, vm.getResult, navigate, nameInput, emailInput, passInput, passAgainInput]
    )

    return (

        <FormSection>

            <h3 className="capitalize w-full">
                
                Sign up to <span className="text-accent">your account</span>
            </h3>

            <Form 
                handleSubmit={
                    () => {
                    
                        vm.setResult = {

                            email: emailInput.current?.value ?? '',
                            name: nameInput.current?.value ?? '',
                            pass: passInput.current?.value ?? '',
                            passAgain: passAgainInput.current?.value ?? ''
                        }
                    }
                }
            >

                <FormInput inputRef={nameInput} inputPlaceholder="your full name" inputType="text" />

                <FormInput inputRef={emailInput} inputPlaceholder="your email address" inputType="email" />

                <FormInput inputRef={passInput} inputPlaceholder="password" inputType="password" />

                <FormInput inputRef={passAgainInput} inputPlaceholder="password again" inputType="password" />

                <FormButton>sign up account</FormButton>
            </Form>

            <div className="flex gap-[5px] self-end">

                <span>Do have an account?</span>

                <Link to={`${pages.profile}/${pages.signIn}`} className="capitalize underline duration-300 hover:text-accent active:text-main">Sign In Now</Link>
            </div>

            <div className="text-center absolute bottom-[15px] tablet:bottom-[30px] laptop:bottom-[50px]">

                {
                    vm.getResult?.email.isUnique == false && <p>This email is already registered</p>
                }

                {
                    vm.getResult?.email.isVerify == false && <p>This is a non-existent email</p>
                }

                {
                    vm.getResult?.pass == false && <p>These passwords do not match</p>
                }

                {
                    vm.getResult?.result && <p>You are get registered</p>
                }
            </div>                
        </FormSection>
    )
})

export default Register