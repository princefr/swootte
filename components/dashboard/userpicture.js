import React, { useContext, useState } from "react";
import onClickOutside from "react-onclickoutside";

import LanguageButton from "../buttons/languageButton";
import CookiesButton from "../buttons/cookieButton";
import { useRouter } from 'next/router'
import { UserContext } from "../../context/UserContext";

import Toogle from "../toogle/toggle";
import DisconnectButton from "../buttons/DisconnectButton"
import { Transition } from "@headlessui/react";


export function PhotoView({photoUrl, height, width }) {
    return (
        <div>
            {
            photoUrl == null ? <div className={`h-${height} w-${width} bg-gray-200 rounded-full`}>
            <svg className={`h-${height} w-${width} rounded-full text-gray-400`} fill="currentColor"  viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            </div> : <img src={photoUrl} className="w-8 h-8 object-cover group-hover:shadow group-focus:shadow  rounded-full"

                    alt="user picture"
                />
            }
        </div>

    )
}




const UserPicture = props => {
    const router = useRouter()
    const [loading, error, data, ] = props.useUser

    const [showDropDown, setshowDropDown] = useState(false);
    const toggleDropdown = () => setshowDropDown(!showDropDown);
    UserPicture.handleClickOutside = () => setshowDropDown(false)

    

    const goToProfil = () => {
        router.push("/profil")
    }

    const goToSettings = () => {
        router.push("/settings")
    }

   


    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;




    return (

        <div className="relative inline-block text-left font-montserrat">
            <button onClick={toggleDropdown} className="group rounded-full overflow-hidden bg-transparent hover:bg-blue-600 hover:bg-opacity-25 h-10 w-10 p-1 transition-all ease-out duration-200 focus:outline-none focus:shadow-outline focus:bg-teal-300 focus:bg-opacity-25">
                <PhotoView height={8} width={8} photoUrl={data.usersExist.photoUrl}></PhotoView>
            </button>

            <Transition show={showDropDown} enter= "transition ease-out duration-100"
             enterFrom="transform opacity-0 scale-95"
             enterTo= "transform opacity-100 scale-100"
             leave="transition ease-in duration-75"
             leaveFrom="transform opacity-100 scale-100"
             leaveTo="transform opacity-0 scale-95">
                 <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className="py-1" role="none">
                            <div className="flex flex-col p-4">
                                <div onClick={goToProfil} className="flex flex-row">
                                    <PhotoView height={16} width={16} photoUrl={data.usersExist.photoURL}></PhotoView>

                                    <div className="flex flex-col ml-5 items-start py-2">
                                        <div className="font-medium">{data.usersExist.first_name + " " + data.usersExist.first_name}</div>
                                        <div className="flex flex-row items-center space-x-2 ml-0">
                                                    <div className={`h-3 w-3 rounded-full ${data.usersExist.is_online ? "bg-green-500" : "bg-gray-500"}`} />
                                                    <div className="text-sm font-montserrat">{data.usersExist.is_online ? "En ligne" : "Déconnecté"}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* https://tailwindcomponents.com/component/toggle-switch toogle swtich inspiration */}
                                <div className="flex flex-row justify-between mt-5 items-center">
                                    <div className="text-sm font-montserrat">{data.usersExist.is_online ? "En ligne" : "Déconnecté"}</div>
                                    <Toogle id="tooglesetOnline" uid={"dsdsds"} />
                                </div>
                            </div>
                        </div>
                        <div className="py-1" role="none">
                            <button className="flex flex-row items-center px-4 py-2 text-sm justify-between  text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <div>Test mode</div>

                                </div>
                                <Toogle id="tooglesetOnline" uid={"dsdsds"} />
                            </button>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <LanguageButton />
                            </a>
                            {/* <a href="#" className="flex flex-row justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                                    <div>Thème sombre</div>
                                </div>
                                <Toogle id="toogleDarkTheme"/>
                            </a> */}
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                                <CookiesButton></CookiesButton>
                            </a>

                            <div onClick={goToSettings} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <div>Support</div>
                                </div>
                            </div>
                        </div>
                        <div className="py-1" role="none">
                            <DisconnectButton></DisconnectButton>
                        </div>
                    </div>
            </Transition>

            

        </div>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () => UserPicture.handleClickOutside
};

export default onClickOutside(UserPicture, clickOutsideConfig);