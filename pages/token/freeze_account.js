
import Dashboard from "../../components/dashboard/dashboard"
import { useState } from "react"
import {Transition } from "@headlessui/react"
import { useMutation } from "@apollo/client"
import { FREEZE_ACCOUNT } from "../../mutation/freezeAccount"
import { useNotification } from "../../notifications/NotificationContext"
import LoadingIcon from "../../components/icons/LoadingIcon"

const FreezeAccount = () => {
    const [address, setAddress] = useState("")

    const [FreezeAccount, { loading }] = useMutation(FREEZE_ACCOUNT)
    const dispatch = useNotification()

    const handleFreezeAccount = (event) => {
        event.preventDefault()
    }

    return (
        <Dashboard pageName={"Send Money"}>
            {

                <div className="flex flex-col  w-full">

                    <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                        <div className="px-12">
                            <h1 className="text-3xl  text-gray-900 font-light font-montserrat">Freeze account</h1>
                        </div>
                        <div className="flex flex-row space-x-3">

                        </div>
                    </header>

                    <nav className="px-6">
                        <div className="flex flex-col px-10">
                            <div className="font-light font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                            <div className="mx-auto w-2/5 mt-10">
                                <div className="flex flex-col relative p-4 space-y-3 items-center">
                                <input required value={address} onChange={((e) => setAddress(e.target.value))}
                                    type="text"
                                    name="address"
                                    id="adress"
                                    placeholder="Account address to freeze"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />

                                


                                <button disabled={!address.length}
                                    type="button"
                                    className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={handleFreezeAccount}
                                >

                                    <Transition show={loading}>
                                        <LoadingIcon/>
                                    </Transition>
                                    <span>Freeze Account</span>
                                </button>
                                </div>
                            </div>
                        </div>


                    </nav>
                </div>

            }
        </Dashboard>
    )
}



export default FreezeAccount