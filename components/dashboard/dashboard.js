
import Head from 'next/head'
import SideBar from './sidebar'
import DashBoardNav from './nav'
import React, { useContext, useEffect } from 'react'
import navButtons from '../../configs/buttons'
import { GET_USER} from '../../queries/getUser'
import { useQuery } from '@apollo/client'
import { ModeContext } from '../../context/ModeContext'
import { Transition } from '@headlessui/react'




const Dashboard = props => {
    const {LiveMode, } = useContext(ModeContext)
    const { loading, error, data, refetch } = useQuery(GET_USER)


    return (
        <div>
            <Head>
                <title>{props.pageName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flex flex-col w-screen">

            </div>
            <main>
                <div className="flex flex-col">
                    <Transition show={LiveMode}>
                        <div className="flex flex-row h-6 bg-yellow-400 justify-center">
                            <span className="items-center text-sm mt-0.5 text-white font-light">Test Mode</span>
                        </div>
                    </Transition>
                    <DashBoardNav useUser={[loading, error, data, refetch]} token={props}></DashBoardNav>
                    <div className="flex flex-row h-screen w-full">
                    <SideBar navButtons={navButtons}  userData={data} loading={loading}/>
                    <div className="Content w-full px-12" >{React.cloneElement(props.children, {...{loading, error, data, refetch}})}</div>
                </div>
                </div>

            </main>

        </div>
    )
}








export default Dashboard

