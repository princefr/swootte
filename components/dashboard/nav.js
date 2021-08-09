import UserPicture from "./userpicture"
import NotificationBell from "../buttons/notificationBell"



export default function DashBoardNav(){
    return(
        <div className="flex flex-row h-16  justify-between p-1 bg-white sticky top-0 z-40 border-b border-gray-200">
            <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <div className="relative text-gray-600 mx-7">
                        <input type="search" name="serch" placeholder="Rechercher une transaction .." className="bg-gray-200 h-10 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-96  font-montserrat rounded-full" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                </nav>
                <div className="inline-flex items-center space-x-2 lg:space-x-3">
                    {/* <button
                        type="button"
                        onClick={() => router.push('/publish')} className="transition ease-out duration-700 w-full mr-5 flex  justify-center space-x-4 px-5 py-2 overflow-hidden focus:outline-none focus:shadow-outline bg-teal-400 hover:bg-red-800 bg-red-500 text-white text-xs items-center font-medium"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                    
                    <span className="font-montserrat text-sm">Arret d'urgence</span>

                    </button> */}
                    <NotificationBell></NotificationBell>

                    <UserPicture firebaseUser={null}></UserPicture>
                    
                    
                </div>
            </div>
        </div>
    )
}