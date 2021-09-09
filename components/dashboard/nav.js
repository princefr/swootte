import UserPicture from "./userpicture"
import NotificationBell from "../buttons/notificationBell"
import DevisePicker from "../pickers/DevisePicker"
import CreateAddPicker from "../pickers/CreateAddPicker"



const DashBoardNav = (props) =>{
    return(
        <div className="flex flex-row h-16 items-center   p-1 w-full bg-white sticky top-0 z-40 border-b border-gray-200">
            <div className="flex justify-between w-full px-3  flex-col md:flex-row items-center">

			<a className="flex items-center justify-center mt-3" href="#">
				<img src="images/Swootte_logo_black.svg" className="h-8"></img>
			</a>

                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <div className="relative text-gray-600 mx-7">
                        <input type="search" name="serch" placeholder="Rechercher une transaction .." className="bg-gray-200 h-10 px-5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black w-96  font-montserrat rounded-full" />
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                </nav>
                <div className="flex flex-row items-center space-x-3 lg:space-x-3">
                    

                    <DevisePicker></DevisePicker>
                    <CreateAddPicker></CreateAddPicker>

                    <NotificationBell></NotificationBell>
                    <UserPicture useUser={props.useUser}></UserPicture>
                    
                    
                </div>
            </div>
        </div>
    )
}


export default DashBoardNav