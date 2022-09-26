import { useMutation } from "@apollo/client"
import { CANCEL_PAYMENT } from "../../../../mutation/paiement/CancelPayment"
import { useNotification } from "../../../../notifications/NotificationContext"
import { Menu, Transition } from "@headlessui/react"
import { usePasscode } from "../../../../passcode/passCodeContext"
import { useContext } from "react"
import { EnterpriseContext } from "../../../../context/EnterpriseContext"
import LoadingIcon from "../../../icons/LoadingIcon"




const CancelMenuItem = ({transactionId}) => {
    const [CancelPayment, {loading}] = useMutation(CANCEL_PAYMENT)
    const {enterpriseId,  setEnterpriseId} = useContext(EnterpriseContext)
    const dispatch = useNotification()
    const passcode = usePasscode()

    const confirm = (_passcode) => {
        CancelPayment({
            variables: {
                transactionId: transactionId,
                enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id,
                pinCode: _passcode

            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "PAIEMENT",
                    message: "Le paiement a été annulé"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "PAIEMENT",
                    message: err.message
                }
            })
        })
    }


    const CancelTransaction = (event) => {
        event.preventDefault()
        passcode({
            payload: {
                type: "REFUND",
                title: "Entrer votre pinCode pour confirmer l'annulation de la transaction",
                confirm: confirm
            }
        })
    }


    return (
        <Menu.Item>
            <button className="flex px-2 py-2 rounded-md bottom-b w-full" onClick={CancelTransaction}>
                <Transition show={loading}>
                    <LoadingIcon></LoadingIcon>
                </Transition>
                Cancel
            </button>
        </Menu.Item>
    )
}


export default CancelMenuItem