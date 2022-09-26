import { useMutation } from "@apollo/client"
import { Menu } from "@headlessui/react"
import { REFUND_PAYMENT } from "../../../../mutation/paiement/RefundPayment"
import { useNotification } from "../../../../notifications/NotificationContext"
import { usePasscode } from "../../../../passcode/passCodeContext"






const RefundMenuItem = ({transactionId}) => {
    const [RefundPayment, {loading}] = useMutation(REFUND_PAYMENT)
    const dispatch = useNotification()
    const passcode = usePasscode()


    const confirm = (passcode) => {
        console.log(passcode)
    }


    const RefundTransaction = (event) => {
        event.preventDefault()
        passcode({
            payload: {
                type: "REFUND",
                title: "Entrer votre pinCode pour confirmer le remboursement",
                confirm: confirm
            }
        })
    }

    return (
        <Menu.Item>
            <button className="flex px-2 py-2 rounded-md bottom-b w-full" onClick={RefundTransaction}>
                refund
            </button>
        </Menu.Item>
    )
}


export default RefundMenuItem