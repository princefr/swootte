import UserPicture from "./userpicture"
import NotificationBell from "../buttons/notificationBell"
import SearchNavBar from "../nav/searchnavBar"
import Link from 'next/link'
import TestModeSwitch from "../switchs/switchTestMode"
import SwootteLogo from "../logo/swootte"
import ChooseEnterpriseListBox from "../enterprise/listbox/chooseEnterpriseListBox"



const DashBoardNav = (props) => {
    return (
        <div className="flex flex-row h-16 items-center   p-1 w-full bg-white sticky top-0 z-40 border-b border-gray-200">
            <div className="flex justify-between w-full px-3  flex-col md:flex-row items-center">

                <Link href="/home">
                    <a className="flex items-center justify-center mt-3">
                        <SwootteLogo height='h-8'></SwootteLogo>
                    </a>
                </Link>

                {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <SearchNavBar></SearchNavBar>
                </nav> */}
                <div className="flex flex-row items-center space-x-3 lg:space-x-3">
                    <ChooseEnterpriseListBox enterprises={props.enterpriseFetch}></ChooseEnterpriseListBox>
                    <NotificationBell token={props.token}></NotificationBell>
                    <UserPicture useUser={props.useUser}></UserPicture>
                </div>
            </div>
        </div>
    )
}


export default DashBoardNav