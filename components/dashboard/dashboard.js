
import Head from 'next/head'
import SideBar from './sidebar'
import DashBoardNav from './nav'
import React, { useContext } from 'react'
import { withAuthUser,  AuthAction } from 'next-firebase-auth'
import navButtons from '../../configs/buttons'
import { GET_USER} from '../../queries/getUser'
import { FirebaseUIDContext } from '../../context/FirebaseUIDContext'
import { useQuery } from '@apollo/client'




const Dashboard = props => {
    const { firebaseUID, } = useContext(FirebaseUIDContext)
    const { loading, error, data, refetch } = useQuery(GET_USER, {
        variables: {
            firebase_uid: firebaseUID
        }
    })

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
                    <DashBoardNav useUser={[loading, error, data, refetch]}></DashBoardNav>
                    <div className="flex flex-row h-screen w-full">
                    <SideBar navButtons={navButtons}/>
                    <div className="Content w-full px-12" >{React.cloneElement(props.children, {...{loading, error, data, refetch}})}</div>
                </div>
                </div>

            </main>

        </div>
    )
}




export default withAuthUser({ whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN, whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN })(Dashboard)

