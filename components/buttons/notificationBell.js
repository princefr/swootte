import { useQuery, useSubscription } from "@apollo/client";
import { Transition } from "@headlessui/react";
import React, {useState } from "react";
import onClickOutside from "react-onclickoutside";
import { GET_NOTIFICATION } from "../../queries/getNotifications";
import { NOTIFICATION_SUBSCRIPTION } from "../../subscription/subscriptoNotification";
import NotificationItem from "../items/notification";
import Skeleton from 'react-loading-skeleton';


function NewNotificationWarningonBell({ firebaseUID }) {
    const { data, loading } = useSubscription(NOTIFICATION_SUBSCRIPTION, {
        variables: {
            listener: firebaseUID
        }
    })

    return (
        <span className="flex h-3 w-3 absolute ml-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-85"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
        </span>
    )
}

function BellComponent({token}) {
    const [showDropDown, setshowDropDown] = useState(false);
    const toggleDropdown = () => setshowDropDown(!showDropDown);
    BellComponent.handleClickOutside = () => setshowDropDown(false)
    const { loading, error, data, refetch } = useQuery(GET_NOTIFICATION)


    if (loading) return <Skeleton circle={true} height={30} width={30}></Skeleton>;
    if (error) return null;


    return (
        <div className="relative inline-block text-left">
            <button onClick={toggleDropdown} className="relative group rounded-full overflow-hidden bg-transparent hover:bg-blue-600 hover:bg-opacity-25 h-8 w-8 p-1 transition-all ease-out duration-200 focus:outline-none focus:shadow-outline focus:bg-teal-300 focus:bg-opacity-25">
                {/* <NewNotificationWarningonBell firebaseUID={firebaseUID}></NewNotificationWarningonBell> */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
            </button>


            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"

                show={showDropDown}>
                <div className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                        <NotificationItem></NotificationItem>
                    </div>
                </div>
            </Transition>

        </div>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () => BellComponent.handleClickOutside
};

export default onClickOutside(BellComponent, clickOutsideConfig);
