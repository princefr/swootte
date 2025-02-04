import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import CountryPicker from '../CountryPicker'
import { useNotification } from "../../notifications/NotificationContext";
import {GET_USER} from "../../queries/getUser";
import { useRouter } from "next/router";
import { useLazyQuery} from '@apollo/client'
import { ChevronRightIcon } from '@heroicons/react/outline'
import LoadingIcon from '../icons/LoadingIcon'
import { getAuth, PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import initAuth from '../../utils/initAuth';
import { useAuthUser } from 'next-firebase-auth';


initAuth()
function ConnnectButton() {
    const [showModal, setshowModal] = useState(false);
    const router = useRouter()
    const useauth = useAuthUser()

    const [usePhone, setPhone] = useState("")
    const [useCode, setCode] = useState("")
    const [isConnected, setIsConnnected]= useState(false)
    const toggleModal = () => isConnected ? checkThis():  setshowModal(!showModal);
    const [checkExist, {called, loading, data}] = useLazyQuery(GET_USER)



    const checkThis = async () => {
        console.log("check this")
        return checkExist().then((res) => {
            if(res.error == null && res.data != null){
                navigateToDashboard
            }else{
                navigateToSignup()
            }
        })
    }
    

    useEffect(() => {
        getAuth().onAuthStateChanged((user) => {
            user != null ? setIsConnnected(true) : setIsConnnected(false)
        })
    }, [])


    useEffect(() => {
        if(!called) return;
        if(!data) return;
        if(data.usersExist == null) return navigateToSignup();
        if(data.usersExist != null) return navigateToDashboard();
    }, [data])


    const navigateToSignup = () => {
        router.push("/signup")
    }


    const navigateToDashboard = () => {
        router.push("/home")
    }

    useEffect(() => {

    }, [])


    const [timer, setTimer] = useState(60);
    const [codeIsLoading, setCodeIsLoading] = useState(false);

    const [isConnectLoading, setConnectLoading] = useState(false);


    const [verificationCode, setVerificationCode] = useState(true);

    const [countryDisplayed, setCountryDisplayed] = useState({ name: "France", dial_code: "+33", code: "FR" });
    const dispatch = useNotification()


    const countdown = () => {
        let interval = setInterval(() => {
            const time = _timer => {
                if (_timer > 0) {
                    return _timer - 1
                } else {
                    setTimer(60)
                    setCodeIsLoading(false)
                    clearInterval(interval)
                }
            }
            setTimer(time)
        }, 1000);
    }




    const handlePhoneChange = (e) => {
        setPhone(e)
    }

    const handleCodeChange = (e) => {
        setCode(e)
    }

    const runAuthsignin = async() => {
        const auth = getAuth()
        countdown()
        signInWithPhoneNumber(auth, countryDisplayed.dial_code + usePhone, window.reCaptchaVerifier)
        .then((confirmationResult) => {
        setVerificationCode(confirmationResult);
        dispatch({
            payload: {
                type: "SUCCESS",
                title: "Votre SMS",
                message: "Un sms vous a été ennvoyé au numéro spécifié"
            }
        })

    }).catch((err) => {
        console.log(err)
        dispatch({
            payload: {
                type: "ERROR",
                title: "Votre SMS",
                message: err.message
            }
        })
    })
    }

    const handleSignUpWithPhone = async (event) => {
        event.preventDefault();
        setCodeIsLoading(true)
        const auth = getAuth();
       if(!window.reCaptchaVerifier || window.reCaptchaVerifier == null) window.reCaptchaVerifier  = new RecaptchaVerifier("sign-in-button",{
        'size': "invisible"}, auth)

        await runAuthsignin()
            
       

    }


    const onVerifyCodeSubmit = event => {
        event.preventDefault();
        setConnectLoading(true)
        const auth = getAuth();
        const credential = PhoneAuthProvider.credential(verificationCode.verificationId, useCode);
        signInWithCredential(auth, credential).then(async() => {
            setshowModal(false)
            setConnectLoading(false)
           return checkExist(
            {
                variables: {}
            }
           ).catch((err) => {
            console.log(err.message)
            if(err.message == "mongo: no documents in result") {
                navigateToSignup()
            }
                dispatch({
                    payload: {
                        type: "ERROR",
                        title: "Votre SMS",
                        message: err.message
                    }
                })
            })
        }).catch((err) => {
            console.log(err.message)
            setConnectLoading(false)
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Votre SMS",
                    message: err.message
                }
            })
        });
    }


    return (
        <div className="relative inline-block text-left">
            <button id='connectButton' onClick={toggleModal} className="flex bg-black p-2.5 rounded-full text-white justify-center items-center space-x-3 font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 font-montserrat">
                <Transition show={!isConnected}>
                    <span>Connexion</span>
                </Transition>
                <Transition show={loading}>
                    <LoadingIcon/>
                </Transition>
                <Transition show={isConnected}>
                    <span>Dashboard</span>
                </Transition>
                <ChevronRightIcon className='h-4 w-4'/>
            </button>

            <Transition appear show={showModal} as={Fragment}>

                <Dialog
                    as="div"
                    className="fixed inset-0 z-50 overflow-y-auto rounded-sm min-h-screen"
                    onClose={toggleModal}
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                    <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-50"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0">
                            <Dialog.Overlay className="fixed inset-0" />
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

                            <div className="inline-block w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-md space-y-3">

                                <Dialog.Title
                                    as="h3"
                                    className="flex flex-row py-10 px-14 items-center overflow-hidden  mx-auto bg-white"
                                >
                                    <img src="images/Swootte_logo_black.svg" className="h-10" alt="swoote logo" />
                                </Dialog.Title>

                                <Dialog.Description className="text-sm px-14">
                                Swootte vous permet de créer votre solution de point de vente pour accepter les paiements en Franc CFA numérique en physique ou sur le web. Commercer sans frontière meme à l'internationale.
                                </Dialog.Description>


                                <div className="flex flex-col items-start space-y-3 px-14">
                                    <div className="text-2xl font-montserrat font-semibold">Connexion</div>
                                    <div className="text-base font-montserrat font-semibold mt-24">Téléphone</div>
                                    <div className="h-10 w-full">
                                        <CountryPicker onChange={handlePhoneChange} countryDisplayed={countryDisplayed} setCountryDisplayed={setCountryDisplayed}></CountryPicker>
                                    </div>
                                    <div className="flex flex-row  w-full space-x-3">
                                        <input id='PhonecodeInput' onChange={(e) => handleCodeChange(e.target.value)} type="text" placeholder="Saisis le code à 4 chiffres" className="w-3/5 h-10  px-2 text-black bg-gray-100 rounded-lg  font-montserrat text-sm  focus:outline-none"></input>
                                        <button id='loginSendCodeButton' onClick={handleSignUpWithPhone} className="h-10 w-2/5 bg-black disabled:opacity-40 rounded-lg text-white text-sm font-montserrat" disabled={!usePhone.length}>
                                            {codeIsLoading ? timer + " seconde(s)" : "Envoyer le code"}
                                        </button>
                                    </div>

                                    <div className="py-2 w-full text-justify">
                                        {/* <p className="text-xs">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                        </p> */}
                                    </div>

                                    <div id="sign-in-button" />


                                    <div className="py-2 w-full h-10">
                                        <button id="PhoneConnexionButton" onClick={onVerifyCodeSubmit} className="flex flex-row items-center justify-center h-10 w-full bg-black rounded-lg text-white text-sm  font-montserrat disabled:opacity-40" disabled={!useCode.length}>
                                            <Transition show={isConnectLoading}>
                                                <LoadingIcon/>
                                            </Transition>
                                            Connexion
                                        </button>
                                    </div>


                                </div>


                                <div className="border-t mt-4 border-gray-100 flex flex-col space-y-3 px-14">
                                    <div className="items-start justify-start flex text-2xl font-montserrat font-semibold mt-5">S'inscrire</div>
                                    <div className="py-2 w-full text-justify">
                                        <p className="text-xs">
                                            Inscrivez vous via nos applications mobile disponibles sur IOS et sur le play store.
                                        </p>
                                    </div>
                                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                                        <a href="https://play.google.com/store/apps/details?id=com.tinda.android">
                                            <button className="bg-gray-300 inline-flex py-1 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 512 512">
                                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                                </svg>
                                                <span className="ml-4 flex items-start flex-col leading-none">
                                                    <span className="text-xs text-gray-600 mb-1">Disponible</span>
                                                    <span className="title-font font-medium">Google Play</span>
                                                </span>
                                            </button>
                                        </a>
                                        <a href="https://apps.apple.com/us/app/tinda-portefeuille-numérique/id1592740993">
                                            <button className="bg-gray-300 inline-flex py-1 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 305 305">
                                                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                                </svg>
                                                <span className="ml-4 flex items-start flex-col leading-none">
                                                    <span className="text-xs text-gray-600 mb-1">Disponible</span>
                                                    <span className="title-font font-medium">App Store</span>
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </Transition.Child>

                    </div>



                </Dialog>
            </Transition>
        </div>
    )
}




export default ConnnectButton