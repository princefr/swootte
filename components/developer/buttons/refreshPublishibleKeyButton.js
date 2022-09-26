import { useMutation } from "@apollo/client"
import { REFRESH_PUBLISHIBLE_KEY } from "../../../mutation/developer/refreshPublishibaleKeyMutation"
import { useNotification } from "../../../notifications/NotificationContext"
import { usePasscode } from "../../../passcode/passCodeContext"
import { RefreshIcon } from "@heroicons/react/outline"
import { Transition } from "@headlessui/react"
import LoadingIcon from "../../icons/LoadingIcon"
import { useContext } from "react"
import { EnterpriseContext } from "../../../context/EnterpriseContext"




const RefreshPublishableKeyButton = () => {
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)
    const passcode = usePasscode()
    const dispatch = useNotification()
    const [RefreshPublibableMutation, {loading}] = useMutation(REFRESH_PUBLISHIBLE_KEY)

    const confirm = (_pincode) => {
        RefreshPublibableMutation({
            variables: {
                enterpriseId: enterpriseId.filter((enterprise) => enterprise.default_enterprise)[0]._id,
                pinCode: _pincode
            }
        }).then((result) => {
            setEnterpriseId(result.data.recreateEnterprisePublishableKey)
            dispatch({
                payload : {
                    type: "SUCCESS",
                    title: "Clé",
                    message: "Votre clé a été mise à jour"
                }
            })
        }).catch((err) => {
            dispatch({
                payload : {
                    type: "ERROR",
                    title: "Clé",
                    message: err.message
                }
            })
        })
    }

    const handleRefresh = (event) => {
        event.preventDefault()
        passcode({
            payload: {
                type: "REFRESHKEY",
                title: "Entrer votre pinCode pour confirmer la creation d'une nouvelle clé",
                confirm: confirm
            }
        })
    }


    return (
        <button onClick={handleRefresh} className="flex bg-red-600 p-2 rounded-full   text-white justify-center items-center space-x-3 font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 font-montserrat">
        <Transition show={!loading}>
            <RefreshIcon className='h-4 w-4 text-white'></RefreshIcon>
        </Transition>
        <Transition show={loading}>
            <LoadingIcon></LoadingIcon>
        </Transition>
</button>
    )
}


export default RefreshPublishableKeyButton