
import { useEffect, useState } from "react"

import "firebase/storage"

import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../mutation/addUser"
import { useNotification } from "../notifications/NotificationContext"


import fr from 'date-fns/locale/fr';

import CountryWithoutPhonePicker from "../components/pickers/CountryWithoutPhonePicker"

import validator from "validator"
import { Transition } from "@headlessui/react"
import { useRouter } from "next/router";
import { SpinLogo } from "../components/items/productItem";
import DateBirthDaySelect from "../components/signup/menus/DateBirthDaySelect";
import { getAuth,  updateProfile, signInWithCustomToken } from "firebase/auth";
import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth"
import { userInDatabase } from "../queries/getUser"
import { useSSrClientApollo } from "../lib/Auth"
import { connectStorageEmulator } from "firebase/storage"

const Signup = () => {
    const [countryDisplayed, setCountryDisplayed] = useState()
    const router = useRouter()
    const authUser = useAuthUser()

    useEffect(() => {
        if (countryDisplayed != null) {
            setCountry(countryDisplayed.name)
        }

    }, [countryDisplayed])

    const [emailValid, setEmailValid] = useState(false)
    const [, setlinkValid] = useState(false)


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
    const [userPassword, setuserPassword] = useState("")
    const [userPasswordConfirm, setuserPasswordConfirm] = useState("")
    const [pinCode, setPinCode] = useState("")


    const handleEmail = (value) => {
        setEmail(value)
        setEmailValid(validator.isEmail(value))
    }



    const [SignupUser, { loading }] = useMutation(CREATE_USER)
    const dispatch = useNotification()


    const handleSignup = async (event) => {
        event.preventDefault()
        let prevUser = getAuth().currentUser
        const token = await getAuth().currentUser.getIdToken(true)
        SignupUser({
            variables: {
                user: {
                    "website": userWebsite,
                    "display_name": userFirstName + ' ' + userLastName,
                    "email": userEmail,
                    "adress": {
                        "city": userCity,
                        "title": userAdress + ", " + userCity + ", " + userZip,
                        "is_chosed": true,
                        "location": {
                            "latitude": 0.0,
                            "longitude": 0.0
                        }
                    },
                    "first_name": userFirstName,
                    "last_name": userLastName,
                    "phonenumber": prevUser.phoneNumber,
                    "pinCode": pinCode,
                    "firebaseUID": prevUser.uid,
                    "country": userCountry,
                    "birth_date": {
                        "day": userBirthDay.getDay(),
                        "month": userBirthDay.getMonth(),
                        "year": userBirthDay.getFullYear(),
                        "iso": userBirthDay.toISOString()
                    }, 
                    "fcmToken": "",
                    "invitedBy": "",
                    "token": token,
                    "password": userPassword
                }
            }
        }).then((result) => {
            const d  = result.data
            signInWithCustomToken(getAuth(), d.createUser.customToken).then((result) => {
                router.push("/home")
                dispatch({
                    payload: {
                        type: "SUCCESS",
                        title: "Signup",
                        message: "Bravo, vous êtes inscrit"
                    }
                })  
            }).catch((error) => {
                dispatch({
                    payload: {
                        type: "ERROR",
                        title: "Signup",
                        message: error.message
                    }
                })
            }
            )

        })

    }

    return (
        <div className="bg-gray-200">
            {/* <NavAlone></NavAlone> */}
            <header className="bg-white shadow-b flex flex-row justify-between items-start p-4 top-0 sticky">
                <div className="flex flex-col px-12">
                    <h1 className="text-3xl font-bold text-gray-900">Signup</h1>
                    <span className="text-sm text-gray-400">En donnant vos informations et en continuant, vous acceptez les Conditions d'utilisation et la politique de confidentialité de Swootte.</span>
                </div>
                <div className="flex flex-row space-x-4">
                    <button id="button_register" onClick={handleSignup} className="transition ease-out duration-700 rounded-lg w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-gray-800 bg-black text-white text-xs items-center font-medium disabled:opacity-50"
                        disabled={!userFirstName.length || !userLastName.length || !userAdress.length || !userCity.length || !userEmail.length || !userStates.length || !userZip.length || !userPassword.length || !userPasswordConfirm.length || !userCountry.length || userPasswordConfirm.length > 0 && userPassword.length > 0 && (userPassword != userPasswordConfirm) || !pinCode.length}>
                        <Transition show={loading}>
                            <SpinLogo height={"h-5"} width={"w-5"}></SpinLogo>
                        </Transition>
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
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Informations personnelles</h3>
                                <p className="mt-1 text-sm text-gray-600">Utilisez une adresse permanente où vous pouvez recevoir du courrier.</p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                        <div className="grid grid-cols-6 gap-3 mt-6">
                                            <div className="col-span-6 p-4 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    Prénom {!userFirstName.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input required value={userFirstName} onChange={((e) => setFirstName(e.target.value))}
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    placeholder="Prénom"
                                                    autoComplete="given-name"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none"
                                                />
                                            </div>

                                            <div className="col-span-6 p-4 sm:col-span-3">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                    Nom {!userLastName.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input required value={userLastName} onChange={((e) => setLastName(e.target.value))}
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    placeholder="Nom de famille"
                                                    autoComplete="family-name"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none"
                                                />
                                            </div>

                                            <div className="col-span-6 p-4 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Email {!userEmail.length || !emailValid ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input required value={userEmail} onChange={((e) => handleEmail(e.target.value))}
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    placeholder="email"
                                                    autoComplete="Email"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none"
                                                />
                                            </div>

                                            <div className="col-span-6 p-4 sm:col-span-4">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                    Mot de passe {!userPassword.length || !userPasswordConfirm.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>

                                                <input required value={userPassword} onChange={((e) => setuserPassword(e.target.value))}
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Mot de passe"
                                                    autoComplete="new-password"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none"
                                                />

                                                <input required value={userPasswordConfirm} onChange={((e) => setuserPasswordConfirm(e.target.value))}
                                                    type="password"
                                                    name="password"
                                                    id="new-password"
                                                    placeholder="Confirmer le mot de passe"
                                                    autoComplete="new-password"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none mt-4"
                                                />

                                                <Transition show={userPasswordConfirm.length > 0 && userPassword.length > 0 && (userPassword != userPasswordConfirm)}>
                                                    <span className="py-3 text-xs text-red-600 font-montserrat">Password must be equal * </span>
                                                </Transition>
                                            </div>

                                            <div className="col-span-6 p-4 sm:col-span-4">
                                                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
                                                    Date de naissance {!userEmail.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <DateBirthDaySelect selectedDay={userBirthDay} setSelectedDay={setuserBirthDay}/>
                                                {/* <DatePicker  showMonthDropdown showYearDropdown dropdownMode="select" monthsShown={2} required selected={userBirthDay} dateFormat="dd/MM/yyyy" onChange={date => setuserBirthDay(date)} className="bg-gray-200 rounded-lg h-10 px-5 pr-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-96 font-montserrat" /> */}
                                            </div>

                                            <div className="col-span-6 p-4 sm:col-span-3">
                                                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
                                                    Pays {!userCountry.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <CountryWithoutPhonePicker countryDisplayed={countryDisplayed} setCountryDisplayed={setCountryDisplayed}></CountryWithoutPhonePicker>
                                            </div>

                                            <div className="col-span-6 p-4">
                                                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                    Adresse {!userAdress.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input required value={userAdress} onChange={((e) => setAdress(e.target.value))}
                                                    type="text"
                                                    name="street-address"
                                                    id="street-address"
                                                    autoComplete="street-address"
                                                    placeholder="Adresse"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-6 p-4 lg:col-span-2">
                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                    Ville {!userCity.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input required value={userCity} onChange={((e) => setCity(e.target.value))}
                                                    type="text"
                                                    name="city"
                                                    id="city"
                                                    placeholder="Ville"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 p-4 lg:col-span-2">
                                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                                    Province {!userStates.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input required value={userStates} onChange={((e) => setStates(e.target.value))}
                                                    type="text"
                                                    name="state"
                                                    id="state"
                                                    placeholder="Province"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none"
                                                />
                                            </div>

                                            <div className="col-span-6 sm:col-span-3 p-4 lg:col-span-2">
                                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                    Code Postal {!userWebsite.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input required value={userZip} onChange={((e) => setZip(e.target.value))}
                                                    type="text"
                                                    name="postal-code"
                                                    id="postal-code"
                                                    placeholder="Code postal"
                                                    autoComplete="postal-code"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-6 mt-10">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Code personnel</h3>
                                <p className="mt-1 text-sm text-gray-600">Utilisez une adresse permanente où vous pouvez recevoir du courrier.</p>
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                                <div className="shadow overflow-hidden sm:rounded-md">
                                    <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-3 mt-6">
                                            <div className="col-span-6 p-4 sm:col-span-3">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                    code personnel {!pinCode.length ? <span className="text-red-600 font-montserrat text-lg">*</span> : null}
                                                </label>
                                                <input required value={pinCode} onChange={((e) => setPinCode(e.target.value))}
                                                    type="password"
                                                    name="pincode"
                                                    id="pincode"
                                                    maxLength="6"
                                                    placeholder="code personnel"
                                                    autoComplete="pincode"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 rounded-lg px-2 focus:outline-none"
                                                />
                                            </div>
                                            </div>
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

export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  })(async ({ AuthUser }) => {
    const token = await AuthUser.getIdToken()
    const client = useSSrClientApollo(token)
   const {data, error} = await userInDatabase(AuthUser.id, client)
   if(!error && data.userExist) {
    return {
        props: {},
        redirect: '/home',
    }
   }else{
    return {
        props: {}
    }
   }
  })

export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(Signup)

