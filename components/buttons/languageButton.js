

import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";


function LanguageButton(){
    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);
    LanguageButton.handleClickOutside = () => setshowModal(false)

    return (
        <div className="relative inline-block text-left">
                    <div onClick={toggleModal} className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <div>Langues</div>
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
                                        <div className="text-2xl font-montserrat font-semibold top-0 sticky">Langues</div>


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
    handleClickOutside: () => LanguageButton.handleClickOutside
};

export default onClickOutside(LanguageButton, clickOutsideConfig);