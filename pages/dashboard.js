
import Head from 'next/head'
import SideBar from '../components/dashboard/sidebar'
import DashBoardNav from '../components/dashboard/nav'
import MainView from '../components/dashboard/mainview'
import WalletsView from '../components/dashboard/WalletsView'
import { useContext } from 'react'
import { SideBarMenuContext } from '../context/SideBarMenuContext'
import TransfersView from '../components/dashboard/transfertsView'
import UsersView from '../components/dashboard/usersView'



export default function Dashboard() {
    const {sidemenu, } = useContext(SideBarMenuContext)
    return (
        <div>

            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col w-screen">

            </div>
            <main>
                <div className="flex flex-row h-screen w-full">
                    <SideBar></SideBar>
                    <div className="bg-gray-100 flex w-full h-full flex-col">
                        <DashBoardNav></DashBoardNav>

                        {
                            sidemenu.map((page) => {
                                if(page.pageName == "home" && page.isActive){
                                    return <MainView></MainView>
                                }else if(page.pageName == "balance" && page.isActive){
                                    return <WalletsView></WalletsView>
                                }
                                else if(page.pageName == "transferts" && page.isActive){
                                    return <TransfersView></TransfersView>
                                }else if(page.pageName == "users" && page.isActive){
                                    return <UsersView></UsersView>
                                }
                            })
                        }
                        

                        </div>

                </div>
            </main>

        </div>
    )
}