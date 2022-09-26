import { useMutation } from "@apollo/client"
import { Transition } from "@headlessui/react"
import { UserAddIcon } from "@heroicons/react/solid"
import { useState } from "react"
import { ADD_CONTACT } from "../../../mutation/AddContact"
import { useNotification } from "../../../notifications/NotificationContext"
import LoadingIcon from "../../icons/LoadingIcon"




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
                            <LoadingIcon/>
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