import { useMutation } from "@apollo/client"
import { Transition } from "@headlessui/react"
import { useState } from "react"
import useLocalization from "../../../hooks/useLocalization"
import { SEND_EMAIL } from "../../../mutation/sendEmail"
import { useNotification } from "../../../notifications/NotificationContext"
import LoadingIcon from "../../icons/LoadingIcon"





const EmailView = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const [SendEmail, { loading }] = useMutation(SEND_EMAIL)
    const dispatch = useNotification()

    const localization = useLocalization()


    const handleSendingEmail = (event) => {
        event.preventDefault()
        SendEmail({
            variables: {
                "email": {
                    "name": name,
                    "email": email,
                    "message": message
                }
            }
        }).then((result) => {
            setName("")
            setEmail("")
            setMessage("")
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Email",
                    message: "Thank you for contacting us, we will try to answer you as soon as possible"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Email",
                    message: err.message
                }
            })
        })
    }   



    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.90772232709!2d-0.12573508424525792!3d51.51490891797508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccaaa0b0b7%3A0xbe144a0754857ae1!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20Royaume-Uni!5e0!3m2!1sfr!2sfr!4v1636947925697!5m2!1sfr!2sfr"></iframe>

                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADRESSE</h2>
                            <p className="mt-1">71-75 Shelton Street, London, UK</p>
                            <p className="mt-1">Case 237 Mounkondo, Brazzaville, Congo</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-indigo-500 leading-relaxed">contact@swootte.com</a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">{localization.EmailViewContactUsText}</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">{localization.EmailViewContactUsDescription}</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">{localization.EmailViewContactUsNameTitle}</label>
                        <input placeholder={localization.EmailViewContactUsNameTitle} required value={name} onChange={((e) => setName(e.target.value))} type="text" id="name" name="name" className="w-full bg-gray-200 h-10 rounded-lg     text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">{localization.EmailViewContactUsEmailTitle}</label>
                        <input placeholder={localization.EmailViewContactUsEmailTitle} required value={email} onChange={((e) => setEmail(e.target.value))} type="email" id="email" name="email" className="w-full bg-gray-200 h-10 rounded-lg    text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">{localization.EmailViewContactUsMessageTitle}</label>
                        <textarea required rows={4} value={message} placeholder={localization.EmailViewContactUsMessagePlaceHolder} onChange={((e) => setMessage(e.target.value))} id="message" name="message" className="w-full py-1 bg-gray-200 h-32 rounded-lg  border   text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button onClick={handleSendingEmail} className="flex flex-row text-white p-3 rounded-lg bg-black border-0 justify-center  focus:outline-none hover:bg-gray-900 text-lg mt-10 sm:mt-0 disabled:opacity-50 items-center" disabled={!email.length || !name.length || !message.length}>
                        <Transition show={loading}>
                            <LoadingIcon/>
                        </Transition>

                        <span className="font-montserrat text-sm">{localization.EmailViewContactUsButtonText}</span>
                    </button>
                    <p className="text-xs text-gray-500 mt-3">{localization.EmailViewContactUsWarningSmallText}</p>
                </div>
            </div>
        </section>
    )
}


export default EmailView