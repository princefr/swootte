

import { useQuery } from "@apollo/client"
import { SwitchHorizontalIcon, UserGroupIcon, ViewGridAddIcon } from "@heroicons/react/solid"
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth"
import { useContext, useEffect } from "react"
import Dashboard from "../components/dashboard/dashboard"
import BurnTokenButton from "../components/token/buttons/burnTokenButton"
import FreezeTokenButton from "../components/token/buttons/freezeAccountButton"
import MintTokenButton from "../components/token/buttons/mintTokenButton"
import { DeviseContext } from "../context/DeviseContext"
import { FirebaseUIDContext } from "../context/FirebaseUIDContext"
import { GET_CIRCULATING_TOKENS } from "../queries/getCirculatinTokens"
import { GET_IS_TOKEN_OWNER } from "../queries/getIsTokenOwner"
import { GET_TOKEN_TOTAL_ACCOUNTS } from "../queries/getTokenTotalAccounts"
import { GET_TOTAL_SUPPLY } from "../queries/getTokenTotalSupply"
import { getDefaultToken } from "../queries/getUser"

const CirculatingTokensView = () => {
    const { firebaseUID, } = useContext(FirebaseUIDContext)
    const { Devise, } = useContext(DeviseContext)
    const { loading, error, data, refetch } = useQuery(GET_CIRCULATING_TOKENS, {
        variables: {
            firebase_uid: firebaseUID,
            token: Devise
        }
    })

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;

    return (
        <div className="flex items-center p-4 bg-white rounded">
            <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded-full">
                <SwitchHorizontalIcon className="w-6 h-6 fill-current text-green-700"></SwitchHorizontalIcon>
            </div>
            <div className="flex-grow flex flex-col ml-4">
                <span className="text-xl font-bold">140</span>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500">Circulating Tokens last 30 days</span>
                    <span className="text-green-500 text-sm font-semibold ml-2">+28.4%</span>
                </div>
            </div>
        </div>
    )
}


const TokensTotalSupplyView = ({token}) => {
    const { firebaseUID, } = useContext(FirebaseUIDContext)
    const { Devise, } = useContext(DeviseContext)
    const { loading, error, data, refetch } = useQuery(GET_TOTAL_SUPPLY, {
        variables: {
            token: token
        }
    })

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;
    return (
        <div className="flex items-center p-4 bg-white rounded">
            <div className="flex flex-shrink-0 items-center justify-center bg-red-200 h-16 w-16 rounded-full">
                <ViewGridAddIcon className="w-6 h-6 fill-current text-red-700"></ViewGridAddIcon>
            </div>
            <div className="flex-grow flex flex-col ml-4">
                <span className="text-xl font-bold">{data.loadTokenSupply}</span>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500">Token total supply last 30 days</span>
                    <span className="text-red-500 text-sm font-semibold ml-2">-8.1%</span>
                </div>
            </div>
        </div>
    )
}


const TokensTotalAccountView = () => {
    const { firebaseUID, } = useContext(FirebaseUIDContext)
    const { Devise, } = useContext(DeviseContext)
    const { loading, error, data, refetch } = useQuery(GET_TOKEN_TOTAL_ACCOUNTS, {
        variables: {
            firebase_uid: firebaseUID,
            token: Devise
        }
    })

    if (loading) return <p>Loading ...</p>;
    if (error) return `Error! ${error}`;

    return (
        <div className="flex items-center p-4 bg-white rounded">
            <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded-full">
                <UserGroupIcon className="h-6 w-6 text-gray-700"></UserGroupIcon>
            </div>
            <div className="flex-grow flex flex-col ml-4">
                <span className="text-xl font-bold">8,430</span>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500">Total token accounts last 30 days</span>
                    <span className="text-green-500 text-sm font-semibold ml-2">+12.6%</span>
                </div>
            </div>

        </div>
    )
}



function AccessModifyToken({ token }) {
    console.log(token)
    const {Devise} = useContext(DeviseContext)
    const { loading, error, data} = useQuery(GET_IS_TOKEN_OWNER, {
        variables: {
            token: token
        }
    })

    useEffect(() => {
        if(Devise != null) console.log(Devise)
    }, [Devise])

    if (loading) return null;
    if (error) return null;
    if(!data.getIsTokenOwner) return null;
    return (
        <div className="flex flex-row space-x-4">
            <FreezeTokenButton></FreezeTokenButton>
            <BurnTokenButton></BurnTokenButton>
            <MintTokenButton token={token}></MintTokenButton>
        </div>
    )
}


export function Token({ token }) {
    return (
        <Dashboard pageName={"Home - Token"} token={token}>{
            <div>
                <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                    <div className="px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Token</h1>
                    </div>

                    <AccessModifyToken token={token}></AccessModifyToken>


                </header>
                <div className="px-12  mt-2 fon-montserrat">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="text-xl  px-12  mt-6">
                    Overview
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full px-12  mt-4 items-center justify-center mx-auto">
                    <CirculatingTokensView></CirculatingTokensView>
                    <TokensTotalSupplyView token={token}></TokensTotalSupplyView>
                    <TokensTotalAccountView></TokensTotalAccountView>

                </div>


                <div className="text-xl items-start left-0 px-12 mt-6">
                    Recent activity
                </div>

                <div className="flex flex-col px-12 py-4">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


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


export default withAuthUser()(Token)