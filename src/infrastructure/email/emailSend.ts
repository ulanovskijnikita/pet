import emailjs from "@emailjs/browser";

emailjs.init({
    limitRate: {
        throttle: 60_000
    },
    publicKey: import.meta.env.VITE_EMAIL_KEY
})

const emailSend = emailjs.send

export default emailSend