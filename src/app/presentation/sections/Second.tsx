import { observer } from "mobx-react-lite";
import FormSection from "../ui/FormSection";
import Form from "../ui/Form";
import FormButton from "../ui/FormButton";
import { useRef } from "react";
import FormTextarea from "../ui/FormTextarea";
import pages from "../router/pages";
import { Link } from "react-router";
import SecondViewModel from "../viewmodel/SecondViewModel";
import useInjection from "../context/inversify/useInjection";
import Loader from "../ui/Loader";

const Second = () => {

    const messageInput = useRef<HTMLTextAreaElement>(null)

    const vm = useInjection(SecondViewModel)

    return (

        <div id={pages.second.hash.substring(1)} className="relative">

            <FormSection>

                <h3 className="capitalize w-full">
                    
                    Rate our store Get <span className="text-accent">20% Off</span> on product
                </h3>

                <Form

                    handleSubmit={

                        () => {

                            if (vm.getId) {

                                vm.setSecondRes = messageInput.current?.value ?? ''
                            }
                        }
                    }
                >

                    <FormTextarea inputRef={messageInput} placeholder="Message" />

                    {

                        vm.getId && <FormButton>Send Message</FormButton>
                    }

                    {

                        !vm.getId && <Link className="bg-main text-bg rounded-btn py-[20px] w-full text-btn uppercase cursor-pointer duration-300 active:bg-main-light" to={pages.profile + '/' + pages.signIn}>Send Message</Link>
                    }
                </Form>

                <div className="absolute bottom-[15px] tablet:bottom-[30px] laptop:bottom-[50px]">

                    {

                        vm.getLoaded && <div className="*:w-[50px]! tablet:*:w-[65px]! laptop:*:w-[100px]!">

                            <Loader />
                        </div>
                    }

                    {

                        vm.getSecondRes?.action && <p>Check your email</p>
                    }

                    {

                        vm.getSecondRes && !vm.getSecondRes.action && <p>You have already left a review</p>
                    }
                </div>
                    
            </FormSection>
        </div>
    )
}

export default observer(Second)