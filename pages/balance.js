
import SendMoneyButton from '../components/buttons/SendMoneyButton'
import ReceiveMoneyButton from '../components/buttons/ReceiveMoneyButton'
import Dashboard from '../components/dashboard/dashboard'
import { useContext, useEffect, useMemo, useState } from 'react'
import {useLazyQuery} from '@apollo/client'
import { GET_BALANCE } from '../queries/getBalance'
import {  AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import Skeleton from 'react-loading-skeleton';
import { addDays, format } from 'date-fns'
import FilterDaysListBox from '../components/listbox/filtersDayListBox'
import EnterpriseDateRangeSelection from '../components/enterprise/buttons/selectDate'
import SuccessPaymentsList from '../components/paiements/List/paymentsSuccessList'
import { DateContext } from '../context/DateContext'
import { EnterpriseContext } from '../context/EnterpriseContext'
import { useSSrClientApollo } from '../lib/Auth'
import { userInDatabase } from '../queries/getUser'



export function Balance({}) {
    const [GetBalance, { loading, error, data, refetch }] = useLazyQuery(GET_BALANCE)
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)

    useEffect(() => {
        if(!enterpriseId) return;
        if(!enterpriseId.length) return;
        GetBalance({
            variables: {
                enterpriseId: enterpriseId.filter((enterprise) => enterprise.default_enterprise)[0]._id
            }
        })
    }, [enterpriseId])

    if (loading) return <Skeleton count={1} height={25} width={60}></Skeleton>;
    if (error) return null;
    if(!data) return null;
    

    return (
        <div className="text-4xl font-montserrat font-medium">
            {data.getEnterpriseBalance}
        </div>
    )
}



export function WalletsView({ token }) {
    const pastMonth = new Date();
    const [range, setRange] = useState({ from: pastMonth, to: addDays(pastMonth, 1) });
    const useDateRange = useMemo(() => ({range, setRange}), [range, setRange])  

    return (
        <DateContext.Provider value={useDateRange}>
            <Dashboard pageName={"home - portefeuille"} token={token}>{
            <div>
                <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                    <div className="">
                        <h1 className="text-3xl font-bold text-gray-900">Portefeuille</h1>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <ReceiveMoneyButton token={token}></ReceiveMoneyButton>
                        <SendMoneyButton></SendMoneyButton>
                    </div>
                </header>
                <main>
                    <div className="flex flex-col p-10   mx-auto">
                        <div className="flex flew-row h-36 w-full">
                            <div className="flex flex-col w-1/5 h-full space-x-3 items-center justify-center border-r border-gray-300">
                                <div className="text-lg font-montserrat font-medium">
                                    Votre solde
                                </div>
                                <Balance token={token}></Balance>
                            </div>
                            <div className="flex flex-col w-3/5 px-16 justify-center h-full text-justify">
                                <p>
                                    Retrouvrez  dans ce menu toutes les transactions ayant participés à votre portefeuille, dépot, retrait mais aussi achat physique ou web ou paiement recu lors d'une vente en physique ou sur le web, tout y est.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between border-b border-gray-400 items-center py-2">
                            <div className="flex text-lg font-montserrat font-medium items-center"></div>
                            <div className="flex flex-row space-x-4">
                                <FilterDaysListBox></FilterDaysListBox>
                                <EnterpriseDateRangeSelection></EnterpriseDateRangeSelection>
                            </div>
                        </div>



                        <div className="flex flex-col py-4">
                            <SuccessPaymentsList></SuccessPaymentsList>
                        </div>
                    </div>
                </main>
            </div>
        }</Dashboard>
        </DateContext.Provider>


    )
}


export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
  })(async ({ AuthUser }) => {
    const token = await AuthUser.getIdToken()
    const client = useSSrClientApollo(token)
   const {data, error} = await userInDatabase(AuthUser.id, client)
   if(!error && data.userExist) {
    return {
        props: {},
        redirect: '/',
    }
   }else{
    return {
        props: {}
    }
   }
  })



export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(WalletsView)