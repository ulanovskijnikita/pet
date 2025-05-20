import FormSection from "../ui/FormSection"
import FormInput from "../ui/FormInput"
import Form from "../ui/Form"
import container from "../../di/container"
import SignInViewModel from "../viewmodel/SignInViewModel"
import { observer } from "mobx-react-lite"
import { Link, useNavigate } from "react-router"
import pages from "../../router/pages"
import { useEffect, useRef } from "react"
import FormButton from "../ui/FormButton"

const SignIn = observer(() => {

    const vm = container.get(SignInViewModel)

    const navigate = useNavigate()

    const emailInput = useRef<HTMLInputElement>(null)
    const passInput = useRef<HTMLInputElement>(null)

    useEffect(

        () => {

            if( vm.getResult?.result == "signIn" ) {

                setTimeout(
                    () => {
                        
                        navigate(pages.profile + '/' + vm.getResult?.userId)

                        vm.setResult = null
                    }, 1000
                )
            }
        }, [vm, navigate, emailInput, passInput, vm.getResult]
    )

    return (

        <FormSection>

            <h3 className="capitalize w-full">
                
                Sign in to <span className="text-accent">your account</span>
            </h3>

            <Form 
                handleSubmit={
                    () => {
                    
                        vm.setResult = {

                            email: emailInput.current?.value ?? '',
                            password: passInput.current?.value ?? '',
                        } 
                    }
                }
            >

                <FormInput inputRef={emailInput} inputPlaceholder="your email address" inputType="email" />

                <FormInput inputRef={passInput} inputPlaceholder="your password" inputType="password" />

                <FormButton>sign in account</FormButton>
            </Form>

            <div className="flex gap-[5px] self-end">

                <span>Don't have an account?</span>

                <Link to={`${pages.profile}/${pages.register}`} className="capitalize underline duration-300 hover:text-accent active:text-main">Sign Up Now</Link>
            </div>

            <div className="text-center absolute bottom-[15px] tablet:bottom-[30px] laptop:bottom-[50px]">

                {
                    vm.getResult?.result == "nobody" && <p>It's unregistered email</p>
                }

                {
                    vm.getResult?.result == "incorrect" && <p>It's wrong password</p>
                }

                {
                    vm.getResult?.result == "signIn" && <p>this is success</p>
                }
            </div>                
        </FormSection>
    )
})

export default SignIn