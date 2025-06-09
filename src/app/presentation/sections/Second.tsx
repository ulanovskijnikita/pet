import { observer } from "mobx-react-lite";
import FormSection from "../ui/FormSection";
import Form from "../ui/Form";
import FormButton from "../ui/FormButton";
import { useRef } from "react";
import FormTextarea from "../ui/FormTextarea";
import pages from "../router/pages";
import container from "../../di/container";
import HomeViewModel from "../viewmodel/HomeViewModel";
import AppViewModel from "../../AppViewModel";
import { Link } from "react-router";

const Second = observer(() => {

    const messageInput = useRef<HTMLTextAreaElement>(null)

    const vm = container.get(HomeViewModel)

    const appVm = container.get(AppViewModel)

    return (

        <div id={pages.second.hash.substring(1)} className="relative">

            <FormSection>

                <h3 className="capitalize w-full">
                    
                    Rate our store Get <span className="text-accent">20% Off</span> on product
                </h3>

                <Form

                    handleSubmit={

                        () => {

                            if (appVm.getUser) {

                                vm.setSecondRes = {

                                    address: appVm.getUser.email,
                                    id: appVm.getUser.id,
                                    name: appVm.getUser.name,
                                    status: appVm.getUser.status,
                                    message: messageInput.current?.value ?? ''
                                }
                            }
                        }
                    }
                >

                    <FormTextarea inputRef={messageInput} placeholder="Message" />

                    <FormButton>

                        {

                            appVm.getUser

                            ?

                            "Send Message"

                            :

                            <Link to={pages.profile + '/' + pages.signIn}>Send Message</Link>
                        }
                        
                    </FormButton>
                </Form>

                <div className="absolute bottom-[15px] tablet:bottom-[30px] laptop:bottom-[50px]">

                    {
                        vm.getSecondRes != null

                        ?

                            vm.getSecondRes.action

                            ?

                            <p>Check your email</p>

                            :

                            <p>You have already left a review</p>

                        :

                        <></>
                    }
                </div>
                    
            </FormSection>
        </div>
    )
})

export default Second