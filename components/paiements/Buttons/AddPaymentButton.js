
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import { useMutation } from '@apollo/client'
import { CREATE_PAIEMENT } from '../../../mutation/paiement/CreatePaiement'
import { EnterpriseContext } from '../../../context/EnterpriseContext'
import { useNotification } from '../../../notifications/NotificationContext'



const AddPaymentButton = () => {

    const [CreatePaiement, {loading}] = useMutation(CREATE_PAIEMENT)
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)
    const dispatch = useNotification()

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }


    const create = (event) => {
        event.preventDefault()
        CreatePaiement({
            variables: {
                enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id,
                amount: "1000"
            }
        }).then((result) => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "PAEIMENT",
                    message: "Nouveau paiement effectué"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "PAEIMENT",
                    message: err.message
                }
            })
        })
    }

    return (
        <div>
            <button  onClick={openModal} className="transition ease-out duration-700 w-full mr-5  rounded-lg bg-gray-200  flex items-center space-x-4 px-5 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <PlusIcon className='h-4 w-4'></PlusIcon>
                <span>Ajouter un paiement</span>
            </button>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-100" onClose={closeModal}>
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
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 border-b py-2"
                                    >
                                       Ajouter un paiement
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent
                                            you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={create}
                                        >
                                            Got it, thanks!
                                        </button>
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



export default AddPaymentButton