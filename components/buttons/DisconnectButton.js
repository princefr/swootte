import { useContext, useState } from "react"
import { FirebaseUIDContext } from "../../context/FirebaseUIDContext"
import DisconnectConfirm from "../ConfirmationPanels/disconnectConfirm"




function DisconnectButton(){

    const [showConfirmation, setShowConfirmation] =  useState(false)
    


    const handleCloseConfirmation = () => {
        setShowConfirmation(false)
        
    }


 


    return (
        <div className="relative inline-block">
                    <button onClick={() => setShowConfirmation(true)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    <div>Se déconnecter</div>
                                </div>
                    </button>
            {
                showConfirmation ? <DisconnectConfirm handleCloseConfirmation={handleCloseConfirmation}></DisconnectConfirm> : null
            }
        </div>
    )
}


export default DisconnectButton