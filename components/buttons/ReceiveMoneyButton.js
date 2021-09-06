
import { useState } from "react";
import QRCode from "qrcode.react";




export function ReceiveMoneyButton() {

    const [showModal, setshowModal] = useState(false);
    const toggleModal = () => setshowModal(!showModal);
    return (
        <div className="relative inline-block text-left">
            <button onClick={toggleModal} className="transition ease-out duration-700 w-full  rounded-lg bg-gray-200  flex items-center space-x-4 px-5 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="font-montserrat text-xs">Recevoir</span>
            </button>

            {
                showModal ? <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" onClick={toggleModal} aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>


                        </div>

                        <span className="hidden sm:inline-block sm:align-top sm:h-24" aria-hidden="true">&#8203;</span>

                        <div className="relative w-auto my-2 mx-auto max-w-xl bg-white rounded-lg py-6">
                            <div className="flex flex-col relative p-4 space-y-3">
                                <div></div>
                                <div onClick={toggleModal} className="h-8 w-8 bg-gray-200 rounded-full text-center p-1">
                                    <a href="#">
                                        <svg className="w-6 h-6 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    </a>
                                </div>
                            </div>


                            <div className="flex flex-col w-full h-96 px-10">
                                <div className="flex items-start justify-start text-left text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="flex items-center justify-center  h-3/5">
                                    <QRCode value="http://facebook.github.io/react/" height="60%" width="60%"/>
                                </div>

                                <div className="flex items-start justify-start text-left text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div className="mt-1 flex rounded-lg bg-gray-200">
                                        <input type="text" name="company-website" id="company-website" className=" flex-1 rounded-lg bg-gray-200 text-sm focus:outline-none   w-full p-2 " placeholder="www.example.com"/>
                                        <span className="inline-flex items-center px-3  border-gray-300 border-l  text-gray-500 text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </span>
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


export default ReceiveMoneyButton