import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import LoadingIcon from '../../icons/LoadingIcon'



function ExportProductsButton({}){
    const [showPanel, setShowPanel] =  useState(false)
    const [loading, setLoading] = useState(false)

    const handleExport = (event) => {
        event.preventDefault()
    }

    const dismissPanel = () => {
        setShowPanel(false)
    }
    return (
        <div className="relative inline-block">
                <button onClick={(() => {setShowPanel(true)})} className="transition ease-out duration-700 w-full mr-5  rounded-lg bg-gray-200 flex items-center space-x-4 px-5 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span className="font-montserrat text-xs whitespace-nowrap">Exporter les produits</span>
                </button>

                <Transition appear show={showPanel} as={Fragment}>

                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto rounded-sm min-h-screen"
                    onClose={dismissPanel}
                >
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
                            leaveTo="opacity-0 scale-95"
                        >

                            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-md space-y-3">

                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Exporter les produits
                                </Dialog.Title>

                                <Dialog.Description className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Dialog.Description>



                                <div className="flex flex-col justify-between">
                                    <main>
                                        <div className="flex flex-col">
                                            <span className="flex items-start p-2">Fuseau horaire</span>
                                            <div className="flex flex-row space-x-10">
                                            <label className="flex radio p-2 cursor-pointer items-center">
                                                <input className="timezone-auto transform scale-125" type="radio" name="timezone" />
                                                <div className="title px-2">UTC+2 (UTC+02:00)</div>
                                            </label>

                                                <label className="flex radio p-2 cursor-pointer items-center">
                                                    <input className="timezone-auto transform scale-125" type="radio" name="timezone" />
                                                    <div className="title px-2">UTC</div>
                                                </label>
                                            </div>
                                        </div>

                                    <span className="flex items-start p-2">Période</span>
                                    <label className="flex radio p-2 cursor-pointer">
                                        <input className="my-auto transform scale-125" type="radio" name="sfg" />
                                        <div className="title px-2">Aujourd'hui</div>
                                    </label>
                                    <label className="flex radio p-2 cursor-pointer">
                                        <input className="my-auto transform scale-125" type="radio" name="sfg" />
                                        <div className="title px-2">Mois en cours</div>
                                    </label>
                                    <label className="flex radio p-2 cursor-pointer">
                                        <input className="my-auto transform scale-125" type="radio" name="sfg" />
                                        <div className="title px-2">7 derniers jours</div>
                                    </label>
                                    <label className="flex radio p-2 cursor-pointer">
                                        <input className="my-auto transform scale-125" type="radio" name="sfg" />
                                        <div className="title px-2">Mois précédent</div>
                                    </label>
                                    <label className="flex radio p-2 cursor-pointer">
                                        <input className="my-auto transform scale-125" type="radio" name="sfg" />
                                        <div className="title px-2">Tout</div>
                                    </label>
                                    <label className="flex radio p-2 cursor-pointer">
                                        <input className="my-auto transform scale-125" type="radio" name="sfg" />
                                        <div className="title px-2">Personalisé</div>
                                    </label>
                                    </main>
                                    <footer className="mt-10 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button onClick={handleExport} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        <Transition show={loading}>
                                            <LoadingIcon/>
                                        </Transition>
                                        Exporter
                                    </button>
                                    <button type="button" onClick={dismissPanel} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                        Annuler
                                    </button>
                                    </footer>
                                </div>
                            </div>

                        </Transition.Child>

                    </div>



                </Dialog>
            </Transition>


            


        </div>
    )
}



export default ExportProductsButton