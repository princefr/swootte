




import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'


function CookiesButton() {
    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);


    return (
        <div className="relative inline-block text-left">
            <div onClick={toggleModal} className="flex flex-row items-center space-x-2 ml-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>Préferences cookies</div>
            </div>

            <Transition appear show={showModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={toggleModal}>
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
                                            Préférences de cookies
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
                                        <div className="text-xs font-montserrat text-justify pb-10 border-b">
                                            Nous utilisons des cookies et d'autres outils semblables (collectivement désignés sous le nom de "cookies") aux fins exposées ci-dessous, et appliquerons vos préférences de cookies sur cet appareil. Il vous sera peut-être demandé de fournir à nouveau votre consentement si vous utilisez un autre appareil.
                                        </div>

                                        <div className="text-sm font-montserrat font-semibold">
                                            Cookies opérationnels et utilisation des données :
                                        </div>

                                        <div className="text-xs font-montserrat text-justify pb-10 border-b">
                                            Les cookies opérationnels sont nécessaires afin de fournir nos services et ne peuvent pas être désactivés.

                                            En savoir plus sur les cookies opérationnels

                                            Bien que la plupart des cookies opérationnels appartiennent et soient gérés par Kookers, il nous arrive dans certaines situations de travailler avec des tiers de confiance qui utilisent des cookies pour activer leurs services. Consultez notre politique de cookies pour en savoir plus.
                                            Nous passons également par des organismes de traitement de paiement afin de collecter et traiter les paiements en lien avec les offres commerciales proposées sur Kookers. Ces organismes de traitement de paiement partagent avec vous les détails de leur collecte de données séparément dans le cadre de leurs processus respectifs de vérification des paiements.
                                        </div>

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


export default CookiesButton