

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


const LanguageButton = () => {
    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);

    return (
        <div className="relative inline-block text-left">
            <div onClick={toggleModal} className="flex flex-row items-center space-x-2 ml-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>Langues</div>
            </div>

            <Transition appear show={showModal} as={Fragment}>
                <Dialog as="div" className="relative z-100" onClose={toggleModal}>
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex justify-between py-10">
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 pl-14 text-gray-900">
                                            Langues
                                        </Dialog.Title>
                                        <div className="flex flex-row justify-between items-end">
                                            <div></div>
                                            <div onClick={toggleModal} className="h-8 w-8 bg-gray-200 rounded-full text-center p-1 outline-none">
                                                <a href="#" className="outline-none">
                                                    <svg className="w-6 h-6 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="flex flex-col items-start space-y-3 px-14">



                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

    )
}





export default LanguageButton;