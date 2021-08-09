import React, { useContext, useState} from "react";
import onClickOutside from "react-onclickoutside";

import LanguageButton from "../buttons/languageButton";
import CookiesButton from "../buttons/cookieButton";
import { useRouter } from 'next/router'
import { UserContext } from "../../context/UserContext";



function UserPicture({firebaseUser}) {
    const router = useRouter()
    const [showDropDown, setshowDropDown] = useState(false);
    const toggleDropdown = () => setshowDropDown(!showDropDown);
    UserPicture.handleClickOutside = () => setshowDropDown(false)
    const {user, } = useContext(UserContext)

    const goToSettings = () => {
        router.push("/settings")
    }

    const goToMySells = () => {
        router.push("/sells")
    }

    const goToMyOrders = () => {
        router.push("/orders")
    }

    const goToWallet = () => {
        router.push("/wallet")
    }

    const goToPaymentMethod = () => {
        router.push("/paymentmethod")
    }

    

    const goToMyChannel = () => {
        router.push("/mychannel")
    }

    return (
        
        <div className="relative inline-block text-left font-montserrat">
            <button onClick={toggleDropdown} className="group rounded-full overflow-hidden bg-transparent hover:bg-blue-600 hover:bg-opacity-25 h-10 w-10 p-1 transition-all ease-out duration-200 focus:outline-none focus:shadow-outline focus:bg-teal-300 focus:bg-opacity-25">
                <img src={user ? user.photoUrl : "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}   className="w-8 h-8 object-cover group-hover:shadow group-focus:shadow  rounded-full"
                    
                    alt="Avatar of Tailwind CSS Design"
                />

            </button>
 
            {
                showDropDown ?
                    <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className="py-1" role="none">
                            <div className="flex flex-col p-4">
                                <div className="flex flex-row">
                                    <img
                                        className="w-16 h-16 object-cover group-hover:shadow group-focus:shadow  rounded-full"
                                        src={user ? user.photoUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                                        alt="Avatar of Tailwind CSS Design"
                                    />
                                    <div className="flex flex-col ml-5 items-start py-2">
                                        <div className="font-medium">Martin PRINCE</div>
                                        {(() => {
                                            if(user){
                                                return <div className="flex flex-row items-center space-x-2 ml-0">
                                                    <div className={`h-3 w-3 rounded-full ${user.is_online? "bg-green-500": "bg-gray-500"}`} />
                                                    <div>{user.is_online? "En ligne" : "Déconnecté"}</div>
                                                </div>
                                            }
                                        })()}
                                    </div>
                                </div>

                                {/* https://tailwindcomponents.com/component/toggle-switch toogle swtich inspiration */}
                                {/* <div className="flex flex-row justify-between mt-5">
                                    {(() => {
                                        if(user){
                                            return <div>{user.is_online ? "En ligne" : "Déconnecté"}</div>
                                        } 
                                    })()}
                                    <Toogle id="tooglesetOnline"  uid= {firebaseUser.id}/>
                                </div> */}
                            </div>
                        </div>
                        <div className="py-1" role="none">
                            <button onClick={goToMySells} className="flex flex-row px-4 py-2 text-sm text-gray-700 justify-between hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <div>Mes ventes</div>
                                </div>
                                
                            </button>
                            <button onClick={goToMyOrders} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
                                    <div>Mes achats</div>
                                </div>
                            </button>
                            <button onClick={goToMyChannel} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                    <div>Ma chaine</div>
                                </div>
                            </button>
                        </div>
                        <div className="py-1" role="none">
                            <button onClick={goToPaymentMethod} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                                    <div>Méthodes de paiements</div>
                                </div>
                            </button>
                            <button onClick={goToWallet} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    <div>Portefeuille</div>
                                </div>
                            </button>
                        </div>
                        <div className="py-1" role="none">
                            <button onClick={goToSettings} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    <div>Paramètres</div>
                                </div>
                            </button>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <LanguageButton/>
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
                        </div>
                        <div className="py-1" role="none">
                            <button onClick={() => firebaseUser.signOut()} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full" role="menuitem">
                                <div className="flex flex-row items-center space-x-2 ml-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    <div>Se déconnecter</div>
                                </div>
                            </button>
                        </div>
                    </div> : null
            }

        </div>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () => UserPicture.handleClickOutside
};

export default onClickOutside(UserPicture, clickOutsideConfig);