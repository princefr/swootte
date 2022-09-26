import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useNotification } from '../../notifications/NotificationContext'
import { InformationCircleIcon } from '@heroicons/react/solid'
import { SpinLogo } from '../items/productItem'
import { useAuthUser } from 'next-firebase-auth'
import { getAuth } from 'firebase/auth'


const PasswordReset = () => {
    const auth = useAuthUser()
    const dispatch  = useNotification()
    const [loading, setLoading] = useState(false)
    const handleResetPassword = (event) => {
        event.preventDefault()
        setLoading(true)
        getAuth().sendPasswordResetEmail(auth.email).then((_res) => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Password reset",
                    message: "Unn email de renitialisation vous a été transmis"
                }
            })
            setLoading(false)
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Password reset",
                    message: err.message
                }
            })
            setLoading(false)
        })
    }

return(
    <button onClick={handleResetPassword}  className="flex flex-row space-x-2 items-center mt-5">
        <Transition show={loading}>
            <SpinLogo height={"h-4"}></SpinLogo>
        </Transition>
        <Transition show={!loading}>
            <InformationCircleIcon className="h-4 text-yellow-500"></InformationCircleIcon>
        </Transition>
        <span className="text-sm">Mot de passe oublié ?</span>
    </button>
)
}

const AskPasswordToCompleteAction = ({ isOpen, runProcess, setOpenModal, phrase, explanationText}) => {
    const [password, setPassword] = useState("")
    const dispatch = useNotification()
    const  [loading, setLoading] = useState(false)

    const handleReAuth = (event) => {
        event.preventDefault()
        setLoading(true)
        const user = getAuth().currentUser;
        const credentials = getAuth().EmailAuthProvider.credential(
            user.email,
            password
        );

        user.reauthenticateWithCredential(credentials).then((res) => {
            setOpenModal(false)
            setLoading(false)
            runProcess()
            setPassword("")
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Reauthentification",
                    message: err.message
                }
            })
            setLoading(false)
        })


    }

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-40 overflow-y-auto"
                    onClose={(() => setOpenModal(false))}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
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
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    S'authentifier pour {phrase}
                                </Dialog.Title>


                                <div className="mt-2 mb-6">
                                    <p className="text-sm text-gray-500">
                                        {explanationText}
                                    </p>
                                </div>


                                <input value={password} onChange={((e) => setPassword(e.target.value))}
                                    type="password"
                                    name="password"
                                    id="password"
                                    autoComplete="password"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3  rounded-lg focus:outline-none"
                                    placeholder="passord"
                                />

                                <PasswordReset></PasswordReset>


                                <div className="flex mt-10 items-center justify-center">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={handleReAuth} disabled={!password.length}
                                    >

                                        <Transition show={loading}>
                                            <SpinLogo height={"h-4"}></SpinLogo>
                                        </Transition>
                                        <span>S'authentifier</span>
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}



export default AskPasswordToCompleteAction