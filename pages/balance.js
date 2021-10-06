
import SendMoneyButton from '../components/buttons/SendMoneyButton'
import ReceiveMoneyButton from '../components/buttons/ReceiveMoneyButton'
import Dashboard from '../components/dashboard/dashboard'
import { useContext, useEffect } from 'react'
import { DeviseContext } from '../context/DeviseContext'
import { useLazyQuery, useQuery } from '@apollo/client'
import { GET_BALANCE } from '../queries/getBalance'
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import Skeleton from 'react-loading-skeleton';
import { getDefaultToken } from '../queries/getUser'
import { GET_ALL_PARTICIPATING_TRANSACTION } from '../queries/getParticipatingTransaction'



export function Balance({ token }) {
    const { Devise, } = useContext(DeviseContext)
    const { loading, error, data, refetch } = useQuery(GET_BALANCE, {
        variables: {
            token: token
        }
    })

    useEffect(() => {
        if (Devise != null) {
            refetch({ token: Devise.publicKey })
        }
    }, [Devise])

    if (loading) return <Skeleton count={1} height={25} width={60}></Skeleton>;
    if (error) return null;

    return (
        <div className="text-4xl font-montserrat font-medium">
            {data.loadBalance.amount}
        </div>
    )
}

const ParticationTransactionsItem = ({activity}) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            Jane Cooper
                        </div>
                        <div className="text-sm text-gray-500">
                            jane.cooper@example.com
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div className="text-sm text-gray-500">Optimization</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td>
        </tr>
    )
}

const ParticationTransactionsItems = () => {
    const { Devise, } = useContext(DeviseContext)
    const [GetTransactionsparticiped, { loading, error, data, refetch }] = useLazyQuery(GET_ALL_PARTICIPATING_TRANSACTION)


    useEffect(() => {
        Devise != null ? GetTransactionsparticiped({ variables: { token: Devise.publicKey } }) : null
    }, [Devise])
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>{error.message}</p>;
    if (data == null) return null;
    if(data.getAllParticipatingTransactions)
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">

                {
                    data.getAllParticipatingTransactions.map((activity) => {
                       return <ParticationTransactionsItem activity={activity} key={activity._id}></ParticationTransactionsItem>
                    })
                }

            </tbody>
        </table>
    )
}





export function WalletsView({ token }) {
    return (
        <Dashboard pageName={"home - portefeuille"} token={token}>{
            <div>

                <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                    <div className="px-12">
                        <h1 className="text-3xl font-bold text-gray-900">Portefeuille</h1>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <ReceiveMoneyButton token={token}></ReceiveMoneyButton>
                        <SendMoneyButton></SendMoneyButton>
                    </div>
                </header>
                <main>
                    <div className="flex flex-col p-10 px-12  mx-auto">
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
                        <div className="flex flex-row h-10 mt-5">
                            <h2 className="text-lg font-montserrat font-medium">Transactions</h2>
                        </div>



                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden  sm:rounded-lg">
                                        <ParticationTransactionsItems></ParticationTransactionsItems>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        }</Dashboard>


    )
}


export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    const token = await AuthUser.getIdToken()
    const { data } = await getDefaultToken(token)
    return {
        props: {
            token: data.usersExist.defaultWallet
        }
    }
})


export default withAuthUser({whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN, whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN })(WalletsView)