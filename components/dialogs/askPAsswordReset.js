
import {useState } from "react"
import firebase from 'firebase/app'
import FirebaseClient from "../../utils/firebase"
import { Transition } from "@headlessui/react"
import { useNotification } from "../../notifications/NotificationContext"



function PasswordResetDialog({handleCloseConfirmation}){
    const [loading, setLoading] = useState(false)
    const [email, setEmail]= useState("")
    FirebaseClient()
    const dispatch = useNotification()

    const handleAskPassword = (event) => {
        event.preventDefault()
        setLoading(true)
        firebase.auth().sendPasswordResetEmail(email).then((res) => {
            setLoading(true)
            handleCloseConfirmation()
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Password reset",
                    message: "fff"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Password reset",
                    message: err.message
                }
            })
        })
        
    }

return (
    <div className="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-2 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={handleCloseConfirmation} aria-hidden="true"></div>
              
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              
                  <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          {/* <!-- Heroicon name: outline/exclamation --> */}
                          <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                            Confirmer la deconnexion
                          </h3>
                          <div className="flex flex-col mt-2 space-y-2">
                            <input value={email} onChange={((e) => setEmail(e.target.value))}
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3  rounded-lg focus:outline-none"
                                    placeholder="email"
                                />
                            <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button onClick={handleAskPassword} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                        <Transition show={loading}>
                        <svg classNameName="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle classNameName="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path classNameName="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                        </Transition>
                        Envoyer
                      </button>
                      <button type="button" onClick={handleCloseConfirmation} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Annuler
                      </button>
                    </div>
                  </div>
                </div>
              </div>
)


}


export default PasswordResetDialog
