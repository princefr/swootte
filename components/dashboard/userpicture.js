import React, { Fragment, useContext, useState, useEffect, useRef } from "react";
import LanguageButton from "../buttons/languageButton";
import CookiesButton from "../buttons/cookieButton";
import { useRouter } from 'next/router'
import Toogle from "../toogle/toggle";
import DisconnectButton from "../buttons/DisconnectButton"
import AddTokenButton from "../token/buttons/addTokenButton";
import CreateTokenButton from "../token/buttons/createTokenButton";
import { ModeContext } from "../../context/ModeContext";
import Skeleton from 'react-loading-skeleton';
import AddAgencyButton from "../token/buttons/addAgencyButton";
import { useMutation } from "@apollo/client";
import { SET_IS_ONLINE } from "../../mutation/setIsOnline";
import onClickOutside from "react-onclickoutside";

import { Menu, Transition, Popover } from '@headlessui/react'

export function PhotoView({ photoUrl, height, width }) {
    return (
        <div>
            <Transition show={photoUrl == null}>
                <div className={`h-${height} w-${width} bg-gray-200 rounded-full`}>
                    <svg className={`h-${height} w-${width} rounded-full text-gray-400`} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
            </Transition>
            <Transition show={photoUrl != null}>
                <img src={photoUrl} className={`w-${width} h-${height} object-cover group-hover:shadow group-focus:shadow  rounded-full`}

                    alt="user picture"
                />

            </Transition>
        </div>

    )
}



const ToggleOnline = ({ isOneline, setIsOnline, refetch, fromdb }) => {
    const [SetisOnlineMutation, { loading }] = useMutation(SET_IS_ONLINE)

    const handleSetIsOnline = (toggle) => {
        setIsOnline(toggle)
        // SetisOnlineMutation({
        //     variables: {
        //         toggle: !toggle
        //     }
        // })
        //refetch()
    }

    setIsOnline(fromdb)

    return (
        <Toogle id="tooglesetOnline" enabled={isOneline} setEnabled={setIsOnline} />
    )
}


const UserPicture = props => {
    const router = useRouter()
    const [loading, error, data, refetch] = props.useUser
    const [showDropDown, setshowDropDown] = useState(false);
    const setVisible = () => setshowDropDown(!showDropDown);
    UserPicture.handleClickOutside = () => setshowDropDown(false)
    const { LiveMode, setLiveMode } = useContext(ModeContext)
    const [isOneline, setIsOnline] = useState(false)
    const [referenceElement, setReferenceElement] = useState();
    const [popperElement, setPopperElement] = useState();





    const goToProfil = () => {
        router.push("/profil")
    }

    const goToSettings = () => {
        router.push("/settings")
    }






    if (!data) return <Skeleton circle={true} height={30} width={30} duration={2} />;
    if (loading) return <Skeleton circle={true} height={30} width={30} duration={2} />;
    if (error) return null;



    return (

        <Popover.Group>
            <Popover className={"inline-block   font-montserrat"} as="nav">
                <Popover.Button onClick={setVisible} ref={setReferenceElement} className={"group rounded-full items-center justify-center overflow-hidden bg-transparent hover:bg-blue-600 hover:bg-opacity-25 h-10 w-10 p-1 transition-all ease-out duration-200 focus:outline-none focus:shadow-outline focus:bg-teal-300 focus:bg-opacity-25"}>
                    <PhotoView height={8} width={8} photoUrl={data.usersExist.photoUrl}></PhotoView>
                </Popover.Button>


                <Transition
                    as={Fragment}
                    show={showDropDown}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >

                   

                    <Popover.Panel ref={setPopperElement} className="absolute right-0 mt-2 -translate-x-2 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">

                            <div className="flex flex-col p-4 border-b border-gray-200">
                                <div onClick={goToProfil} className="flex flex-row">
                                    <PhotoView height={16} width={16} photoUrl={data.usersExist.photoUrl}></PhotoView>

                                    <div className="flex flex-col ml-5 items-start py-2">
                                        <div className="font-medium">{data.usersExist.first_name + " " + data.usersExist.last_name}</div>
                                        <div className="flex flex-row items-center space-x-2 ml-0">
                                            <div className={`h-3 w-3 rounded-full ${data.usersExist.is_online ? "bg-green-500" : "bg-gray-500"}`} />
                                            <div className="text-sm font-montserrat">{data.usersExist.is_online ? "En ligne" : "Déconnecté"}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <Transition show={data != null && !loading && data.usersExist.permissions.includes("ADMIN")}>

                                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                    <CreateTokenButton></CreateTokenButton>
                                </div>

                            </Transition>


                            <Transition show={data != null && !loading && data.usersExist.permissions.includes("ADMIN")}>

                                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                    <AddTokenButton></AddTokenButton>
                                </div>


                            </Transition>

                            <Transition show={data != null && !loading && data.usersExist.permissions.includes("AGENT")}>

                                <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                    <AddAgencyButton></AddAgencyButton>
                                </div>


                            </Transition>



                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <LanguageButton />
                            </div>



                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <CookiesButton></CookiesButton>
                            </div>





                            <div className="py-1" role="none">
                                <DisconnectButton></DisconnectButton>
                            </div>

                        </div>
                    </Popover.Panel>


                </Transition>



            </Popover>

        </Popover.Group>

    )
}

export default UserPicture

