import { useMutation } from '@apollo/client'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { ADD_PRODUCT } from '../../../mutation/AddProduct'
import { useNotification } from '../../../notifications/NotificationContext'



const AddProductButton = () => {
    const [showPanel, setShowPanel] = useState(false)
    const [AddProduct, { loading }] = useMutation(ADD_PRODUCT)

    const dismissPanel = (event) => {
        setShowPanel(false)
    }



    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    
    const dispatch = useNotification()

    const handleAddproduct = (e) => {
        e.preventDefault()
        AddProduct({
            variables: {
                "product": {
                    "name": name,
                    "description": description,
                    "imgUrl": imgUrl
                }
            }
        }).then((result) => {
            setShowPanel(false)
            setName("")
            setDescription("")
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Product",
                    message: "Bravo, vous avez ajouté un produit"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Product",
                    message: err.message
                }
            })
        })
    }
    return (
        <div className="relative inline-block">
            <button onClick={(() => { setShowPanel(true) })} className="transition ease-out duration-700 w-full mr-5 rounded-lg bg-gray-200 flex items-center space-x-4 px-5 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="font-montserrat text-xs whitespace-nowrap">Ajouter un produit</span>
            </button>

            <Transition appear show={showPanel} as={Fragment}>

                <Dialog
                    as="div"
                    className="fixed inset-0 z-40 overflow-y-auto rounded-sm min-h-screen"
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
                                    Ajouter un produit
                                </Dialog.Title>

                                <Dialog.Description className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                </Dialog.Description>



                                <div className="h-54 flex flex-row space-x-4">
                                        <div className="w-4/6 flex flex-col space-y-8">
                                            <div className="col-span-6 sm:col-span-">
                                                <label htmlFor="first-name" className="flex  text-sm font-medium text-gray-700 space-x-2 items-center">
                                                    <span>Nom</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </label>
                                                <input
                                                    required value={name} onChange={((e) => setName(e.target.value))}
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Plan premium, lunettes de soleil, etc."
                                                    autoComplete="given-name"
                                                    className="h-10 w-full px-2 text-black bg-gray-100 rounded-lg  font-montserrat text-sm  focus:outline-none"
                                                />
                                            </div>
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="flex  text-sm font-medium text-gray-700 space-x-2 items-center">
                                                    <span>Description</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </label>
                                                <textarea
                                                    required value={description} onChange={((e) => setDescription(e.target.value))}
                                                    id="about"
                                                    name="about"
                                                    rows={3}
                                                    placeholder="Plan premium, lunettes de soleil, etc."
                                                    autoComplete="given-name"
                                                    className="p-2 mt-3 text-black bg-gray-100 rounded-lg  font-montserrat text-sm  focus:outline-none w-full"
                                                />
                                            </div>
                                        </div>
                                        <div className=" w-2/6">
                                            <label className="flex text-sm font-medium text-gray-700 space-x-2 items-center">
                                                <span>Cover photo</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </label>
                                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div className="space-y-1 text-center">
                                                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        PNG, JPG up to 10MB
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    
                                    <div className="font-montserrat font-medium text-sm flex items-start">
                                    Informations tarifaires
                                    </div>

                                    <footer className="mt-10 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button onClick={handleAddproduct} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        <Transition show={loading}>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </Transition>
                                        <span>Enregistrer le produit</span>
                                    </button>
                                    <button type="button" onClick={dismissPanel} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                        Annuler
                                    </button>
                                </footer>
                            </div>

                        </Transition.Child>

                    </div>



                </Dialog>
            </Transition>




        </div>
    )
}



export default AddProductButton