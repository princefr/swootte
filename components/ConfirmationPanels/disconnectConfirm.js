


import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import LoadingIcon from '../icons/LoadingIcon'
import { useAuthUser } from 'next-firebase-auth'



function DisconnectConfirm({handleCloseConfirmation, isOpen}){
    const [loading, ] = useState(false)
    const auth = useAuthUser()
    const handleConfirmSignout = async (event) => {
        event.preventDefault()
        handleCloseConfirmation()
        await auth.signOut()
        
        
    }

return (

  <Transition appear show={isOpen} as={Fragment}>
  <Dialog as="div" className="relative z-100" onClose={handleCloseConfirmation}>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 bg-black bg-opacity-25" onClick={handleCloseConfirmation} />
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
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-8 text-gray-900"
            >
              Confirmer la deconnexion
            </Dialog.Title>
            <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden  transform transition-all  sm:align-middle ">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          {/* <!-- Heroicon name: outline/exclamation --> */}
                          <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Souhaitez vous vraiment vous déconnecter de swootte ?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-6 sm:px-3 sm:flex sm:flex-row-reverse ">
                      <button onClick={handleConfirmSignout} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                        <Transition show={loading}>
                          <LoadingIcon/>
                        </Transition>
                        Se deconnecter
                      </button>
                      <button type="button" onClick={handleCloseConfirmation} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Annuler
                      </button>
                    </div>
                  </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  </Dialog>
</Transition>


)


}


export default DisconnectConfirm
