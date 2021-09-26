import { useMutation } from "@apollo/client"
import { Transition } from "@headlessui/react"
import { UserAddIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { ADD_CONTACT } from "../../../mutation/AddContact"
import { useNotification } from "../../../notifications/NotificationContext"




export const AddContactSearchButton = ({contact}) => {
    const [AddContact, { loading }] = useMutation(ADD_CONTACT)
    const [success, setSucces] = useState(false)
    const dispatch = useNotification()



    const handleAddContact = (event) => {
        event.preventDefault()
        AddContact({
            variables: {
                contact: contact._id
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Contacts",
                    message: "contact added"
                }
            })
            setSucces(true)
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Contacts",
                    message: err.message
                }
            })
        })
    }

    return (
        <div className="">
                <Transition show={!success}>
                    <button onClick={handleAddContact} className="flex flex-row space-x-2 bg-black rounded-full px-2 py-1 items-center">
                            <Transition show={!loading}>
                                <UserAddIcon className="h-4 w-4 text-white"></UserAddIcon>
                            </Transition>
                            <Transition show={loading}>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </Transition>
                            <span className="text-sm font-montserrat text-white">ajouter</span>
                        </button>
                </Transition>
            </div>
    )
}

export const ContactItemSearch = ({contact}) => {
    return (
        <div className="flex flex-row space-x-3 justify-between items-center px-4 p-2">
            <div className="h-8 w-8 bg-black rounded-full"></div>
            <div className="">ONDONDA Prince</div>
            <AddContactSearchButton contact={contact}></AddContactSearchButton>
            
        </div>
    )
}