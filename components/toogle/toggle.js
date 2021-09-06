
import { useNotification } from "../../notifications/NotificationContext"
import { Switch } from '@headlessui/react'
import { useState } from "react"





function Toogle({ id, uid }) {
    //const { user, setUser } = useContext(UserContext)
    //const [ToogleOnline] = useMutation(TOOGLE_ONLINE)
    const dispatch = useNotification()
    const [enabled, setEnabled] = useState(false)




    const handleOnChange = () => {
        // ToogleOnline({
        //     variables: {
        //         firebaseUid: uid,
        //         isOnline: !user.is_online
        //     }
        // }).then((result) => {
        //     setUser(result.data.toogleOnline)
        // }).catch((err) => {
        //     dispatch({
        //         payload: {
        //             type: "ERROR",
        //             title: "Profil utilisateur",
        //             message: err.message
        //         }
        //     })

        // })
    }

    return (

        <div className="py-1">
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-green-300' : 'bg-gray-300'}
          relative inline-flex flex-shrink-0 h-[24px] w-[54px] border-2 border-transparent items-center rounded-lg px-1 cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-7' : 'translate-x-0'}
            pointer-events-none inline-block h-[16px] w-[16px] rounded-full items-center bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
            </Switch>
        </div>



    )
}


export default Toogle