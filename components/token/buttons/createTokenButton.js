import { useMutation } from "@apollo/client"
import { Dialog, Transition } from "@headlessui/react"
import {  PlusSmIcon } from "@heroicons/react/solid"
import { Fragment, useState } from "react"
import { CREATE_NEW_TOKEN } from "../../../mutation/CreateNewToken"




const CreateTokenButton = () => {
    const [showPanel, setShowPanel] = useState(false)
    const [name, setName] = useState("")
    const [tick, setTick] = useState("")
    const [decimals, setDecimals] = useState("")
    const [mintAuthority, setMintAuthority] = useState("")
    const [freezeAuthority, setFreezeAuthority] = useState("")

    const [CreateNewToken, { loading }] = useMutation(CREATE_NEW_TOKEN)

    const dismissPanel = () => {
        setShowPanel(false)
    }


    const handleCreateToken = (event) => {
        event.preventDefault()
    }

    return (
        <div onClick={(() => setShowPanel(true))} className="relative inline-block">
            <button className="transition ease-out duration-700 w-full mr-5   flex items-center space-x-2 px-2 py-1 focus:outline-none focus:shadow-outline text-xs font-medium">
                <PlusSmIcon className="h-6 w-6 text-gray-500"></PlusSmIcon>
                <span className="font-montserrat text-sm  font-light">Create token</span>
            </button>

            <Transition show={showPanel}>
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
                                    Create new token
                                </Dialog.Title>

                                <Dialog.Description className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Dialog.Description>

                                <input required value={name} onChange={((e) => setName(e.target.value))}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Token name"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />

                                <input required value={tick} onChange={((e) => setTick(e.target.value))}
                                    type="text"
                                    name="tick"
                                    id="tick"
                                    placeholder="Token tick"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />


                                <input required value={decimals} onChange={((e) => setDecimals(e.target.value))}
                                    type="number"
                                    name="decimals"
                                    id="decimals"
                                    placeholder="decimals"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />

                                <input required value={mintAuthority} onChange={((e) => setMintAuthority(e.target.value))}
                                    type="text"
                                    name="mintauthority"
                                    id="mintauthority"
                                    placeholder="Sol address of mint authority"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />

                                <input required value={freezeAuthority} onChange={((e) => setFreezeAuthority(e.target.value))}
                                    type="text"
                                    name="freezeauthority"
                                    id="freezeauthority"
                                    placeholder="Sol address of freeze authority"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />

                                <Dialog.Description className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Dialog.Description>


                                <button disabled={!name.length || !tick.length || !decimals.length}
                                    type="button"
                                    className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={handleCreateToken}
                                >

                                    <Transition show={loading}>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                    </Transition>
                                    <span>Create new token</span>
                                </button>
                            </div>

                        </Transition.Child>
                    </div>

                </Dialog>
            </Transition>
        </div>
    )
}



export default CreateTokenButton