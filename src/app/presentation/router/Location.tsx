import { ReactNode, useEffect } from "react"
import { useLocation } from "react-router"

type LocationProps = {

    children: ReactNode
}

const Location = (props: LocationProps) => {

    const location = useLocation()

    useEffect(

        () => {

            const hash = location.hash

            if (hash) {

                const element = document.querySelector(hash)

                if (element) setTimeout(() => element.scrollIntoView({block: "center"}), 0)
            }
        }, [location]
    )

    return (

        <>

            {

                props.children
            }
        </>
    )
}

export default Location