import { useState } from "react"



function ClientExportButton({}){
    const [showPanel, setShowPanel] =  useState(false)

    const dismissPanel = (event) => {
        event.preventDefault()
        setShowPanel(false)
    }
    return (
        <div className="relative inline-block">
                <button onClick={(() => {setShowPanel(true)})} className="transition ease-out duration-700 w-full mr-5  rounded-lg bg-gray-200  flex items-center space-x-4 px-5 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        <span className="font-montserrat text-xs whitespace-nowrap">Exporter</span>
                </button>


                {
                    showPanel ? <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" onClick={dismissPanel} aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>


                        <span className="hidden sm:inline-block sm:align-top sm:h-24" aria-hidden="true">&#8203;</span>
                        <div className="relative w-auto my-2 mx-auto max-w-xl bg-white rounded-lg py-6">
                            <div className="flex flex-col relative p-4 space-y-3">
                                <div className="flex flex-row justify-between items-end">
                                    <div></div>
                                    <div onClick={dismissPanel} className="h-8 w-8 bg-gray-200 rounded-full text-center p-1">
                                        <a href="#">
                                            <svg className="w-6 h-6 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </a>
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



export default ClientExportButton