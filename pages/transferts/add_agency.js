
import Dashboard from "../../components/dashboard/dashboard"
import { useMutation } from "@apollo/client"
import {Transition } from "@headlessui/react"

import { useState } from "react"
import { useNotification } from "../../notifications/NotificationContext"
import { ADD_AGENCY } from "../../mutation/addAgency"
import LoadingIcon from "../../components/icons/LoadingIcon"



const AddAgencyView = () => {
    const [name, setAgencyName] = useState("")
    const [address, setAgencyAddress] = useState("")

    const [AddAgency, { loading }] = useMutation(ADD_AGENCY)
    const dispatch = useNotification()

    const handleAddAgency = (event) => {
        event.preventDefault()
        AddAgency({
            variables: {
                agency: {
                    title: name,
                    address: address
                }
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Agency",
                    message: "Addresse créé"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Agency",
                    message: err.message
                }
            })
        })
    }

    return (
        <Dashboard pageName={"Agency - add"}>
            {

                <div className="flex flex-col  w-full">

                    <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                        <div className="px-12">
                            <h1 className="text-3xl  text-gray-900 font-light font-montserrat">Agency</h1>
                        </div>
                        <div className="flex flex-row space-x-3">

                        </div>
                    </header>

                    <nav className="px-6">
                        <div className="flex flex-col px-10">
                            <div className="font-light font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                            <div className="mx-auto w-2/5 mt-10">
                                <div className="flex flex-col relative p-4 space-y-3 items-center">
                                <div className="px-3 flex flex-col w-full mt-4 space-y-3">
                                        
                                        <h3 className="text-lg font-medium leading-6 text-gray-900 px-3">
                                            Effectuer un retrait
                                        </h3>
                                        <span className="text-sm items-start text-left px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>

                                        <div className="px-3 flex flex-col w-full mt-4 space-y-3">

                                            <input required value={name} onChange={((e) => setAgencyName(e.target.value))}
                                                type="text"
                                                name="text"
                                                id="text"
                                                placeholder="Name of the Agency"
                                                className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                            />

                                        </div>


                                        <div className="px-3 flex flex-col w-full mt-4 space-y-3">

                                            <input required value={address} onChange={((e) => setAgencyAddress(e.target.value))}
                                                type="text"
                                                name="text"
                                                id="adress-text"
                                                placeholder="Address of the malice"
                                                className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                            />

                                        </div>


                                        

                                        <div className="w-full px-3 py-4">
                                            <span className="text-xs items-start flex  text-left px-3 pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utklabore et dolore magna aliqua</span>


                                            <button disabled={!address.length || !name.length}
                                                type="button"
                                                className="inline-flex w-full justify-center px-4 py-2 mt-4 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                onClick={handleAddAgency}
                                            >


                                                <Transition show={loading}>
                                                    <LoadingIcon/>
                                                </Transition>
                                                <span>Ask a withdraw</span>
                                            </button>
                                        </div>
                                    
                                </div>
                                </div>
                            </div>


                        </div>


                    </nav>
                </div>

            }
        </Dashboard>
    )
}


function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}


export default AddAgencyView