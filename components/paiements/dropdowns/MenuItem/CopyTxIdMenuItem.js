import { useNotification } from "../../../../notifications/NotificationContext"
import { Menu } from "@headlessui/react"




const CopyMenuItem = ({transactionId}) => {
    const dispatch = useNotification()

    const copyToClipBoard = async () => {
        try {
            await navigator.clipboard.writeText(transactionId);
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Copie",
                    message: "Le texte a bien été copié dans le clipboard."
                }
            })
          } catch (err) {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Copie",
                    message: err.message
                }
            })
          }
    }


    return (
        <Menu.Item>
            <button className="flex px-2 py-2 rounded-md bottom-b w-full" onClick={copyToClipBoard}>
                Copy Tx ID
            </button>
        </Menu.Item>
    )
}


export default CopyMenuItem