import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import PinCodePad from './pincodepad'

const PinCodeModal = (props) => {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
        setTimeout(() => {
            props.passcode({
                type:"CLOSE",
                id: props.id
            })
        },400)
    }

    function openModal() {
        setIsOpen(true)
        setTimeout(() => {
            props.passcode({
                type:"OPEN",
                id: props.id
            })
        }, 400)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-100" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all space-y-9">
                                    <Dialog.Title as="h3" className="flex text-lg font-medium items-center justify-center text-gray-900 p-4 border-b border-black">
                                        {props.payload.title}
                                    </Dialog.Title>

                                    <PinCodePad confirm={props.payload.confirm} closeModal={closeModal}>

                                    </PinCodePad>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}



export default  PinCodeModal