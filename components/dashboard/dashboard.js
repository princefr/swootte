
import Head from 'next/head'
import SideBar from './sidebar'
import DashBoardNav from './nav'
import React, { useContext, useEffect} from 'react'
import navButtons from '../../configs/buttons'
import { GET_USER} from '../../queries/getUser'
import {useLazyQuery} from '@apollo/client'
import { UserContext } from '../../context/UserContext'
import { GET_ALL_USER_ENTERPRISE } from '../../queries/enterprise/getAllUserEnterprise'
import EmptyEnterprise from '../../empty/enterprise/EmptyEnterprise'
import DashboardSkeleton from './loadings/DashboardSkeleton'
import { EnterpriseContext } from '../../context/EnterpriseContext'
import { AuthAction, withAuthUser } from 'next-firebase-auth'
import { QrCodeContext } from '../../context/QrCodeContext'





const Dashboard = props => {
    const {_user, setUser} = useContext(UserContext)
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)
    const {qrCode, setQrCode} = useContext(QrCodeContext)

    
    const [getCurrentUser, { loading, error, data, refetch }] = useLazyQuery(GET_USER, {onCompleted: data => setUser(data.usersExist)})
    const [getAllEnterprises, {loading: loading_, error: error_, data:data_, refetch:refetch_}] = useLazyQuery(GET_ALL_USER_ENTERPRISE, {onCompleted: data => {
        setEnterpriseId(data.getAllUserEnterprise)
        if(!data) return;
        if(data.getAllUserEnterprise == null) return;
        if(!data.getAllUserEnterprise.length) return;
        setQrCode(data.getAllUserEnterprise.filter((enterprise) => enterprise.default_enterprise)[0].walletPublicKey)
    }})

    useEffect(() => {
        getCurrentUser()
        getAllEnterprises() 
    }, [])
    
    
    return (
        <div>
            <Head>
                <title>{props.pageName}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="flex flex-col">
                    <DashBoardNav useUser={[loading, error, data, refetch]} token={props}  enterpriseFetch={[loading_, error_, data_, refetch_]}></DashBoardNav>
                    {(() => {
                        if(loading_) return <DashboardSkeleton></DashboardSkeleton>
                        if(!data) return <EmptyEnterprise></EmptyEnterprise>
                        if(data_.getAllUserEnterprise == null) return <EmptyEnterprise></EmptyEnterprise>
                        if(!data_.getAllUserEnterprise.length) return <EmptyEnterprise></EmptyEnterprise>
                        return <div className="flex flex-row h-screen w-full">
                        <SideBar navButtons={navButtons}  userData={data} loading={loading}/>
                        <div className="Content w-full ml-16 px-2" >{React.cloneElement(props.children, {...{loading, error, data, refetch}})}</div>
                    </div> 
                    })()}
                </div>
            </main>
        </div>
    )
}




export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(Dashboard)







