
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import NavAlone from "../components/nav/nav_alone"
import uuid from 'react-uuid'

import firebase from 'firebase/app'
import "firebase/storage"

import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth';
import FirebaseClient from "../utils/firebase"
import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../mutation/addUser"
import { useNotification } from "../notifications/NotificationContext"
import DatePicker, { registerLocale } from "react-datepicker";

import fr from 'date-fns/locale/fr';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('fr', fr)

export function Signup({ }) {
    FirebaseClient()

    const [brutFile, setBrutFile] = useState("")
    const storage = firebase.app().storage("gs://swoosh-97759.appspot.com");


    const [displayImage, setDisplayImage] = useState("")
    const [userWebsite, setWebsite] = useState("")
    const [userFirstName, setFirstName] = useState("")
    const [userLastName, setLastName] = useState("")
    const [userEmail, setEmail] = useState("")
    const [userCountry, setCountry] = useState("")
    const [userAdress, setAdress] = useState("")
    const [userCity, setCity] = useState("")
    const [userStates, setStates] = useState("")
    const [userZip, setZip] = useState("")
    const [userBirthDay, setuserBirthDay] = useState(new Date())

    // notifications

    //const [userZip, setZip] = useState("")


    const [SignupUser, { loading }] = useMutation(CREATE_USER)
    const dispatch = useNotification()


    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        setBrutFile(file)
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            const binaryStr = reader.result
            setDisplayImage(binaryStr)
        }
        reader.readAsDataURL(file)
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    const [checkedState, setCheckedState] = useState([false, false])


    const handleSignup = async (event) => {
        console.log("handling signup")
        event.preventDefault()
        const ref = "user/profil/" + firebase.auth().currentUser.uid + ".jpg"
        var metadata = {
            contentType: 'image/jpeg',
        };


        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            console.log("loaded")
            const binaryStr = reader.result
            storage.ref(ref).put(binaryStr, metadata).then(async () => {
                const url = await storage.ref(ref).getDownloadURL().catch(err => { throw err })
                console.log(url)
                SignupUser({
                    variables: {
                        user: {
                            "website": userWebsite,
                            "display_name": userFirstName + ' ' + userLastName,
                            "email": userEmail,
                            "adresses": [{
                                "title": userAdress + ", " + userCity + ", " + userZip,
                                "is_chosed": true
                            }],
                            "first_name": userFirstName,
                            "last_name": userLastName,
                            "phonenumber": firebase.auth().currentUser.phoneNumber,
                            "photoUrl": url,
                            "firebaseUID": firebase.auth().currentUser.uid,
                            "country": userCountry,
                            "birth_date": {
                                "day": userBirthDay.getDay(),
                                "month": userBirthDay.getMonth(),
                                "year": userBirthDay.getFullYear(),
                                "iso": userBirthDay.toISOString()
                            }
                        }
                    }
                }).then(() => {
                    dispatch({
                        payload: {
                            type: "SUCCESS",
                            title: "Signup",
                            message: "Bravo, vous etes inscrit"
                        }
                    })

                }).catch((err) => {
                    dispatch({
                        payload: {
                            type: "ERROR",
                            title: "Signup",
                            message: "Une erreur est survenu, veuillez reessayer"
                        }
                    })
                })
            })

        }
        reader.readAsArrayBuffer(brutFile)

    }





    return (
        <div className="bg-gray-200">
            <NavAlone></NavAlone>
            <header className="bg-white shadow-b flex flex-row justify-between items-start p-4 top-0 sticky">
                <div className="px-12">
                    <h1 className="text-3xl font-bold text-gray-900">Signup</h1>
                </div>
                <div className="flex flex-row space-x-4">
                    <button onClick={handleSignup} className="transition ease-out duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium disabled:opacity-50" disabled={!userFirstName.length || !userLastName.length || !userAdress.length || !userCity.length || !userEmail.length || !userStates.length || !userZip.length}>
                        {
                            loading ? <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg> :  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        }

                        <span className="font-montserrat text-sm">Register</span>
                    </button>
                </div>

            </header>


            <div className="flex flex-col p-20">

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="flex items-center justify-center">
                                            {
                                                !displayImage.length ? <div className="mt-1 flex items-center">
                                                    <span className="inline-block h-36 w-36 rounded-full overflow-hidden bg-gray-100" {...getRootProps()}>
                                                        <input className=" bg-gray-300" {...getInputProps()} />
                                                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg>
                                                    </span>
                                                </div> : <div className="mt-1 flex items-center">
                                                    <span className="inline-block h-36 w-36 rounded-full overflow-hidden bg-gray-100" {...getRootProps()}>
                                                        <input className=" bg-gray-300" {...getInputProps()} />
                                                        <img className="h-full w-full object-cover" src={displayImage} />
                                                    </span>
                                                </div>
                                            }

                                        </div>

                                        <div className="grid grid-cols-3 gap-6 mt-10">
                                            <div className="col-span-3 sm:col-span-2">
                                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                                    Website {!userWebsite.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                        http://
                                                    </span>
                                                    <input value={userWebsite} onChange={((e) => setWebsite(e.target.value))}
                                                        type="text"
                                                        name="company-website"
                                                        id="company-website"
                                                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                                        placeholder="www.example.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 gap-6 mt-10">
                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    First name {!userFirstName.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input value={userFirstName} onChange={((e) => setFirstName(e.target.value))}
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Last name {!userLastName.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input value={userLastName} onChange={((e) => setLastName(e.target.value))}
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Email address {!userEmail.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input value={userEmail} onChange={((e) => setEmail(e.target.value))}
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>


                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Birthday {!userEmail.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <DatePicker selected={userBirthDay} dateFormat="MMMM d, yyyy" onChange={date => setuserBirthDay(date)} className="bg-gray-200 h-10 px-5 pr-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-96 font-montserrat" />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                    Country / Region {!userWebsite.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country"
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Street address {!userAdress.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input value={userAdress} onChange={((e) => setAdress(e.target.value))}
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    City {!userCity.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input value={userCity} onChange={((e) => setCity(e.target.value))}
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                                    State / Province {!userStates.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input value={userStates} onChange={((e) => setStates(e.target.value))}
                                                    type="text"
                                                    name="state"
                                                    id="state"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                    ZIP / Postal {!userWebsite.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input value={userZip} onChange={((e) => setZip(e.target.value))}
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    autoComplete="postal-code"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                                <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        <fieldset>
                                            <legend className="text-base font-medium text-gray-900">By Email</legend>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="offers"
                                                            name="offers"
                                                            type="checkbox"
                                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="offers" className="font-medium text-gray-700">
                                                            Payments
                                                        </label>
                                                        <p className="text-gray-500">Get notified when a payment goes through or fail.</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id="candidates"
                                                            name="candidates"
                                                            type="checkbox"
                                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="candidates" className="font-medium text-gray-700">
                                                            Features
                                                        </label>
                                                        <p className="text-gray-500">Get notified our team lanch a new feature.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset>
                                            <div>
                                                <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
                                                <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                            </div>
                                            <div className="mt-4 space-y-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-everything"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Everything
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-email"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
                                                        Same as email
                                                    </label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input
                                                        id="push-nothing"
                                                        name="push-notifications"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                    />
                                                    <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
                                                        No push notifications
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default withAuthUser({whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN, whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(Signup)

