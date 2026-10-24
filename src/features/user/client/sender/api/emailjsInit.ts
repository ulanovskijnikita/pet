import emailjs from "@emailjs/browser";

const emailjsInit = () => emailjs.init({

    limitRate: {

        throttle: 60_000
    },
    publicKey: import.meta.env.VITE_EMAIL_KEY
})

export default emailjsInit