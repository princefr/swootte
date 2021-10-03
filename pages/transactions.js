import Dashboard from "../components/dashboard/dashboard"
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from 'next-firebase-auth'
import Skeleton from 'react-loading-skeleton';
import { getDefaultToken } from '../queries/getUser'
import CreateAgencyButton from "../components/agencies/buttons/createAgencyButton";
import { MyRadioGroup } from "../components/agencies/buttons/TabSelectSeverity";
import { useMutation, useQuery } from "@apollo/client";
import { GET_AGENCY_TRANSACTIONS } from "../queries/getAgencyTransactions";
import AskPasswordToCompleteAction from "../components/dialogs/AskPasswordToCompleteAction";
import { Fragment, useState } from "react";
import { CONFIRM_TRANSACTION_AGENT } from "../mutation/ConfirmWithdraw";
import { CANCEL_TRANSACTION_AGENT } from "../mutation/CancelWithdraw";
import { useNotification } from "../notifications/NotificationContext";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { SpinLogo } from "../components/items/productItem";



const ValidateTransactionButton = ({ transaction }) => {
    const [ValidateTransaction, { loading }] = useMutation(CONFIRM_TRANSACTION_AGENT)
    const [confirmBool, setConfirm] = useState(false)
    const dispatch = useNotification()

    const handleValidateTransaction = () => {
        ValidateTransaction({
            variables: {
                transaction_id: transaction._id,
                type: transaction.type
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Withdraw",
                    message: "Votre demande de retrait a été bien enregistré"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Withdraw",
                    message: err.message
                }
            })
        })
    }

    const handleConfirm = (event) => {
        event.preventDefault()
        setConfirm(true)
    }

    return (
        <div>
            <button onClick={handleConfirm}>
                <Transition show={!loading} className="flex flex-row space-x-1 items-center rounded-full bg-green-200 p-1">
                    <CheckIcon className="h-4 w-4 text-green-700"></CheckIcon>
                    <span className="px-1 text-green-700">Validate</span>
                </Transition>
                <Transition show={loading} className="flex flex-row space-x-1 items-center rounded-full bg-green-200 p-1">
                    <SpinLogo height={"h-4"} width={"w-4"} ></SpinLogo>
                    <span className="px-1 text-green-700">Validation...</span>
                </Transition>
            </button>

            <AskPasswordToCompleteAction isOpen={confirmBool} runProcess={handleValidateTransaction} setOpenModal={setConfirm} phrase={"valider cette transaction"} explanationText={`Une reconnexion est necessaire pour valider la transaction de type ${transaction.type} de ${transaction.creator.first_name} d'un montant de ${transaction.amount}`}></AskPasswordToCompleteAction>
        </div>
    )
}


const CancelTransactionButton = ({ transaction }) => {
    const [CancelTransaction, { loading }] = useMutation(CANCEL_TRANSACTION_AGENT)
    const [confirmBool, setConfirm] = useState(false)
    const dispatch = useNotification()


    const handleCancelTransaction = () => {
        CancelTransaction({
            variables: {
                transaction_id: transaction._id,
                type: transaction.type
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Withdraw",
                    message: "Votre demande de retrait a été bien enregistré"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Withdraw",
                    message: err.message
                }
            })
        })
    }

    const handleConfirm = (event) => {
        event.preventDefault()
        setConfirm(true)
    }

    return (
        <div>
            <button onClick={handleConfirm} className="px-1">
                <Transition show={!loading} className="flex flex-row space-x-1 items-center rounded-full bg-red-200 p-1">
                    <XIcon className="h-4 w-4 text-red-700"></XIcon>
                    <span className="px-1 text-red-700">Cancel</span>
                </Transition>
                <Transition show={loading} className="flex flex-row space-x-1 items-center rounded-full bg-red-200 p-1">
                    <SpinLogo height={"h-4"} width={"w-4"} ></SpinLogo>
                    <span className="px-1 text-red-700">Cancelation...</span>
                </Transition>
            </button>

            <AskPasswordToCompleteAction isOpen={confirmBool} runProcess={handleCancelTransaction} setOpenModal={setConfirm} phrase={"annuler cette transaction"} explanationText={`Une reconnexion est necessaire pour annuler la transaction de type ${transaction.type} de ${transaction.creator.first_name} d'un montant de ${transaction.amount}`}></AskPasswordToCompleteAction>
        </div>
    )
}


const TransfertAgencyItem = ({ transaction }) => {
    return (
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
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Admin
                </td>
                <td className="py-4 whitespace-nowrap text-right text-sm font-medium">
                    <ValidateTransactionButton transaction={transaction}></ValidateTransactionButton>
                </td>
                <td className="py-4 whitespace-nowrap text-right text-sm font-medium">
                    <CancelTransactionButton transaction={transaction}></CancelTransactionButton>
                </td>
            </tr>
        </tbody>
    )
}


const TransfertAgencyItems = () => {
    const { loading, error, data, refetch } = useQuery(GET_AGENCY_TRANSACTIONS)

    if (loading) return <div>hdhhdh</div>;
    if (error) return null;

    return (
        <div className="-my-2 overflow-x-auto sm:-mx-6 mt-5 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Utilisateur
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Montant
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                </th>

                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Validateur
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">validate</span>
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">cancel</span>
                                </th>
                            </tr>
                        </thead>
                        {data.retrieveAllAgenciesTransactions.map((transaction) => {
                            return <TransfertAgencyItem transaction={transaction}></TransfertAgencyItem>

                        })}
                    </table>
                </div>
            </div>
        </div>
    )


}




const AgencyView = ({ token }) => {
    return (
        <Dashboard pageName={"Transactions - Agences"} token={token}>
            {
                <div>
                    <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                        <div className="px-12">
                            <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
                        </div>
                        <div className="flex flex-row space-x-4">
                            <MyRadioGroup />
                        </div>
                    </header>

                    <main className="py-4 px-6">
                        <div className="flex flex-col px-10">
                            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <TransfertAgencyItems></TransfertAgencyItems>
                        </div>

                    </main>
                </div>
            }

        </Dashboard>
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


export default withAuthUser()(AgencyView)

