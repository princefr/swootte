import { useMutation } from "@apollo/client"
import { Transition } from "@headlessui/react"
import { TrashIcon } from "@heroicons/react/outline"
import { useRouter } from "next/router"
import { useContext } from "react"
import { EnterpriseContext } from "../../../context/EnterpriseContext"
import { REMOVE_ENTERPRISE } from "../../../mutation/enterprise/removeEnterprise"
import { useNotification } from "../../../notifications/NotificationContext"
import { usePasscode } from "../../../passcode/passCodeContext"
import LoadingIcon from "../../icons/LoadingIcon"




const DeleteEnterpriseButton  = () => {
    const [DeleteEnterprise, {loading}] = useMutation(REMOVE_ENTERPRISE)
    const passcode = usePasscode()
    const dispatch = useNotification()
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)
    const router = useRouter()

    const confirm = (_passcode) => {
        DeleteEnterprise({
            variables: {
                enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id,
                pinCode: _passcode
            }
        }).then((result) => {
            router.push('/home')
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "ENTERPRISE",
                    message: "L'entreprise a été effacée"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "ENTERPRISE",
                    message: err.message
                }
            })
        })
    }

    const handleRemoveEnterprise = (event) => {
        event.preventDefault()
        passcode({
            payload: {
                type: "ENTERPRISE",
                title: "Entrer votre code pin pour confirmer  la suppréssion de cette entreprise",
                confirm: confirm
            }
        })
    }

    return (
        <button onClick={handleRemoveEnterprise} className="flex flex-row items-center justify-center  bg-red-600 px-3 py-2 text-white space-x-3 hover:bg-red-400">
        <Transition show={loading}>
            <LoadingIcon/>
        </Transition>
        <Transition show={!loading}>
            <TrashIcon className="h-4 w-4"></TrashIcon>
        </Transition>
        <span className="text-sm">Supprimer l'entreprise</span>
      </button>
    )

}




export default DeleteEnterpriseButton