import { useMutation } from "@apollo/client"
import { Dialog, Transition } from "@headlessui/react"
import { PlusSmIcon } from "@heroicons/react/solid"
import { Fragment, useState } from "react"
import { MINT_TOKENS } from "../../../mutation/minTokens"
import { useNotification } from "../../../notifications/NotificationContext"





const MintTokenButton = () => {
    const [showPanel, setShowPanel] = useState(false)
    const [amount, setAmount] = useState("")
    const [address, setAddress] = useState("")

    const [MintTokens, { loading }] = useMutation(MINT_TOKENS)
    const dispatch = useNotification()


    const handleMintToken = (event) => {
        event.preventDefault()
    }


    const dismissPanel = () => {
        setShowPanel(false)
    }


    return (
        <div className="relative inline-block">
            <button onClick={(() => setShowPanel(true))} className="transition ease-out duration-700 w-full mr-5  rounded-lg bg-gray-200  flex items-center space-x-4 px-5 py-1 focus:outline-none focus:shadow-outline text-xs font-medium">
                <PlusSmIcon className="h-4 w-4 text-gray-700"></PlusSmIcon>
                <span className="font-montserrat text-sm font-light">Mint</span>
            </button>

            <Transition show={showPanel} as={Fragment}>
                <Dialog as="div"
                    className="fixed inset-0 z-50 overflow-y-auto rounded-sm min-h-screen"
                    onClose={dismissPanel}>



                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                    <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">

                        <Transition.Child as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>


                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95">

                            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-md space-y-3">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Mint new tokens
                                </Dialog.Title>

                                <Dialog.Description className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Dialog.Description>

                                <input required value={amount} onChange={((e) => setAmount(e.target.value))}
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    placeholder="Amount to mint"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />


                                <input required value={address} onChange={((e) => setAddress(e.target.value))}
                                    type="text"
                                    name="address"
                                    id="amount"
                                    placeholder="Adress where to mint"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />

                                <Dialog.Description className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Dialog.Description>


                                <button disabled={!address.length || amount == null || amount <= 0 || !address.length}
                                    type="button"
                                    className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={handleMintToken}
                                >

                                    <Transition show={loading}>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    </Transition>
                                    <span>Mint tokens</span>
                                </button>


                            </div>

                        </Transition.Child>
                    </div>

                </Dialog>
            </Transition>
        </div>

    )
}


export default MintTokenButton