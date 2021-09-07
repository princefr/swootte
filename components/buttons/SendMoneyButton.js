

import { useMutation } from "@apollo/client";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { CREATE_TRANSFER } from "../../mutation/CreateTransfer";
import { useNotification } from "../../notifications/NotificationContext";

export function SendMoneyButton() {

    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);
    const [adress, setAdress] = useState("")
    const [amount, setAmount] = useState("")


    const [CreateTransfer, { loading }] = useMutation(CREATE_TRANSFER)
    const dispatch = useNotification()


    const handleCreateTransfer = (event) => {
        event.preventDefault()
        CreateTransfer({
            variables: {
                publicKey: adress,
                token: "sqsdq",
                amount: parseFloat(amount)
            }
        }).then((result) => {
            setAdress("")
            setAmount("")
            setshowModal(false)
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Send money",
                    message: "Votre argent à bien été envoyé"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Send money",
                    message: err.message
                }
            })
        })
    }

    return (
        <div className="relative inline-block text-left">


            <button onClick={toggleModal} className="transition ease-out duration-700 w-full mr-5  rounded-lg bg-gray-200  flex items-center space-x-4 px-5 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="font-montserrat text-xs">Envoyer</span>
            </button>

        

            <Transition show={showModal}>
                <div className="fixed z-40 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen  px-4  text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" onClick={toggleModal} aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>


                        </div>

                        <span className="hidden sm:inline-block sm:align-top sm:h-24" aria-hidden="true">&#8203;</span>

                        <div className="relative w-auto my-2 mx-auto max-w-xl bg-white rounded-lg py-6">
                            <div className="flex flex-col relative p-4 space-y-3 items-start">
                                <div></div>
                                <div onClick={toggleModal} className="h-8 w-8 bg-gray-200 rounded-full text-center p-1">
                                    <a href="#">
                                        <svg className="w-6 h-6 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </a>
                                </div>


                                <h3 className="text-lg font-medium leading-6 text-gray-900 px-3">
                                    Envoyer de l'argent
                                </h3>
                                <span className="text-sm items-start text-left px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                                <div className="px-3 flex flex-col w-full mt-4 space-y-3">
                                    <input required value={adress} onChange={((e) => setAdress(e.target.value))}
                                        type="text"
                                        name="wallet-adress"
                                        id="wallet-adress"
                                        placeholder="Wallet adress"
                                        className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                    />

                                    <input required value={amount} onChange={((e) => setAmount(e.target.value))}
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        placeholder="Amount to send"
                                        className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                    />
                                </div>

                                <span className="text-sm items-start text-left px-3 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>

                                <div className="w-full pt-6 px-3">
                                <button disabled={!adress.length || amount == null || amount <= 0}
                                    type="button"
                                    className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={handleCreateTransfer}
                                >

                                    <Transition show={loading}>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    </Transition>
                                    <span>Send money</span>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>





        </div>
    )
}


export default SendMoneyButton