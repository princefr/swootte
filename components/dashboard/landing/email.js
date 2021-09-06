import { useMutation } from "@apollo/client"
import { useState } from "react"
import { SEND_EMAIL } from "../../../mutation/sendEmail"
import { useNotification } from "../../../notifications/NotificationContext"





const EmailView = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const [SendEmail, { loading }] = useMutation(SEND_EMAIL)
    const dispatch = useNotification()


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
                    <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                            <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact us</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Get easier access to answers to your questions, right in your inbox.
                        Fill out the form below and we'll send you all the information you need. We promise you won't receive hundreds of emails from us. We're here to make your job easier.</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                        <input placeholder="Name" required value={name} onChange={((e) => setName(e.target.value))} type="text" id="name" name="name" className="w-full bg-gray-200 h-10 rounded-lg     text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input placeholder="Email" required value={email} onChange={((e) => setEmail(e.target.value))} type="email" id="email" name="email" className="w-full bg-gray-200 h-10 rounded-lg    text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                        <textarea required rows={4} value={message} placeholder="Write a message here." onChange={((e) => setMessage(e.target.value))} id="message" name="message" className="w-full py-1 bg-gray-200 h-32 rounded-lg  border   text-base outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button onClick={handleSendingEmail} className="flex flex-row text-white p-3 rounded-lg bg-black border-0 justify-center  focus:outline-none hover:bg-gray-900 text-lg mt-10 sm:mt-0 disabled:opacity-50 items-center" disabled={!email.length || !name.length || !message.length}>
                        {
                            loading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg> : null
                        }

                        <span className="font-montserrat text-sm">Send Email</span>
                    </button>
                    <p className="text-xs text-gray-500 mt-3">By submitting this form, you give us permission to contact you by phone and email, and to send you promotional information. You may cancel at any time.</p>
                </div>
            </div>
        </section>
    )
}


export default EmailView