

import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";


function CookiesButton(){
    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);
    CookiesButton.handleClickOutside = () => setshowModal(false)

    return (
        <div className="relative inline-block text-left">
                    <div onClick={toggleModal} className="flex flex-row items-center space-x-2 ml-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <div>Préferences cookies</div>
                    </div>

                    {
                        showModal ? <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" onClick={toggleModal} aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>


                            <span className="hidden sm:inline-block sm:align-top sm:h-24" aria-hidden="true">&#8203;</span>
                            <div className="relative w-auto my-2 mx-auto max-w-xl bg-white rounded-lg py-6">
                                <div className="flex flex-col relative p-4 space-y-3">
                                    <div className="flex flex-row justify-between items-end">
                                        <div></div>
                                        <div onClick={toggleModal} className="h-8 w-8 bg-gray-200 rounded-full text-center p-1">
                                            <a href="#">
                                                <svg className="w-6 h-6 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                            </a>
                                        </div>
                                    </div>

                                    
                                    <div className="flex flex-col items-start space-y-3 px-14">
                                        <div className="text-2xl font-montserrat font-semibold">Préférences de cookies</div>
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

                                </div>
                            </div>
                        </div>
                    </div> : null
                    }
        </div>

    )
}



const clickOutsideConfig = {
    handleClickOutside: () => CookiesButton.handleClickOutside
};

export default onClickOutside(CookiesButton, clickOutsideConfig);