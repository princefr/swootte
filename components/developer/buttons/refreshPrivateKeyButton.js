import { useMutation } from "@apollo/client"
import { REFRESH_PRIVATE_KEY } from "../../../mutation/developer/refreshPrivateKeyMutation"
import { useNotification } from "../../../notifications/NotificationContext"
import { usePasscode } from "../../../passcode/passCodeContext"
import { RefreshIcon } from "@heroicons/react/outline"
import { Transition } from "@headlessui/react"
import LoadingIcon from "../../icons/LoadingIcon"
import { useContext } from "react"
import { EnterpriseContext } from "../../../context/EnterpriseContext"



const RefreshPrivateKeyButton = () => {
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)

    const passcode = usePasscode()
    const dispatch = useNotification()
    const [RefreshPrivateKeyMutation, {loading}] = useMutation(REFRESH_PRIVATE_KEY)


    const confirm = (_pincode) => {
        RefreshPrivateKeyMutation({
            variables: {
                enterpriseId: enterpriseId.filter((enterprise) => enterprise.default_enterprise)[0]._id,
                pinCode: _pincode

            }
        }).then((result) => {
            setEnterpriseId(result.data.recreateEnterprisePrivateKey)
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
                title: "Entrer votre code pin pour confirmer la creation d'une nouvelle clé",
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
                        <LoadingIcon className='h-4 w-4 text-white'></LoadingIcon>
                    </Transition>
            </button>
        )
}



export default RefreshPrivateKeyButton