import Dashboard from "../components/dashboard/dashboard"
import { AuthAction, withAuthUser} from 'next-firebase-auth'
import { useMutation, useQuery } from "@apollo/client";
import { GET_AGENCY_TRANSACTIONS } from "../queries/getAgencyTransactions";
import AskPasswordToCompleteAction from "../components/dialogs/AskPasswordToCompleteAction";
import {  useContext, useState } from "react";
import { CONFIRM_TRANSACTION_AGENT } from "../mutation/ConfirmWithdraw";
import { CANCEL_TRANSACTION_AGENT } from "../mutation/CancelWithdraw";
import { useNotification } from "../notifications/NotificationContext";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { SpinLogo } from "../components/items/productItem";
import { DeviseContext } from "../context/DeviseContext";
import { format } from 'date-fns'



const ValidateTransactionButton = ({ transaction, refetch }) => {
    const [ValidateTransaction, { loading }] = useMutation(CONFIRM_TRANSACTION_AGENT)
    const [confirmBool, setConfirm] = useState(false)
    const dispatch = useNotification()
    const {Devise, } = useContext(DeviseContext)

    const handleValidateTransaction = () => {
        ValidateTransaction({
            variables: {
                transaction_id: transaction._id,
                type: transaction.type,
                token: Devise.publicKey
            }
        }).then(() => {

            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Withdraw",
                    message: "La transaction a été validé"
                }
            })
            refetch()
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
                    {/* <span className="px-1 text-green-700">Validate</span> */}
                </Transition>
                <Transition show={loading} className="flex flex-row space-x-1 items-center rounded-full bg-green-200 p-1">
                    <SpinLogo height={"h-4"} width={"w-4"} ></SpinLogo>
                    {/* <span className="px-1 text-green-700">Validation...</span> */}
                </Transition>
            </button>

            <AskPasswordToCompleteAction isOpen={confirmBool} runProcess={handleValidateTransaction} setOpenModal={setConfirm} phrase={"valider cette transaction"} explanationText={`Une reconnexion est necessaire pour valider la transaction de type ${transaction.type} de ${transaction.creator.first_name} d'un montant de ${transaction.amount}`}></AskPasswordToCompleteAction>
        </div>
    )
}


const CancelTransactionButton = ({ transaction, refetch }) => {
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
                    message: "La transaction a été annulé"
                }
            })
            refetch()
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
                    {/* <span className="px-1 text-red-700">Cancel</span> */}
                </Transition>
                <Transition show={loading} className="flex flex-row space-x-1 items-center rounded-full bg-red-200 p-1">
                    <SpinLogo height={"h-4"} width={"w-4"} ></SpinLogo>
                    {/* <span className="px-1 text-red-700">Cancelation...</span> */}
                </Transition>
            </button>

            <AskPasswordToCompleteAction isOpen={confirmBool} runProcess={handleCancelTransaction} setOpenModal={setConfirm} phrase={"annuler cette transaction"} explanationText={`Une reconnexion est necessaire pour annuler la transaction de type ${transaction.type} de ${transaction.creator.first_name} d'un montant de ${transaction.amount}`}></AskPasswordToCompleteAction>
        </div>
    )
}




const TransfertAgencyItem = ({ transaction, refetch }) => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <tbody className="bg-white divide-y divide-gray-200">
            <tr>
            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                    {transaction.shortId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={transaction.creator.photoUrl} alt="" />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                                {transaction.creator.last_name.toUpperCase()} { capitalizeFirstLetter(transaction.creator.first_name)}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    {transaction.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {transaction.status}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {transaction.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {format(new Date(transaction.createdAt), "dd/MM/yyyy")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {
                        (() => {
                            if(transaction.validator != null){
                                return <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                    <img className="h-10 w-10 rounded-full" src={transaction.validator.photoUrl} alt="swottte validator photo url" />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                        {transaction.validator.first_name}  {transaction.validator.last_name}
                                    </div>
                                </div>
                            </div>
                            }
                        })()
                    }
                </td>
                <td className="py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Transition show={transaction.status == "IN_PROGRESS"}>
                        <ValidateTransactionButton transaction={transaction} refetch={refetch}></ValidateTransactionButton>
                    </Transition>
                    
                </td>
                <td className="py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Transition show={transaction.status == "IN_PROGRESS"}>
                        <CancelTransactionButton transaction={transaction} refetch={refetch}></CancelTransactionButton>
                    </Transition>
                </td>
            </tr>
        </tbody>
    )
}


const TransfertAgencyItems = () => {
    const { loading, error, data, refetch } = useQuery(GET_AGENCY_TRANSACTIONS)
    
    if (loading) return <div>chargement....</div>;
    if (error) return null;

    return (
        <div className="-my-2 overflow-x-auto sm:-mx-6 mt-5 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Réference
                                </th>
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
                                    Date
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
                            return <TransfertAgencyItem transaction={transaction} refetch={refetch}></TransfertAgencyItem>

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
                        {/* <div className="flex flex-row space-x-4">
                            <MyRadioGroup />
                        </div> */}
                    </header>

                    <main className="py-4 px-6">
                        <div className="flex flex-col px-10">
                            <div>Valider ou annuler les les dépots ou les retraits des utilisateurs.</div>
                            <TransfertAgencyItems></TransfertAgencyItems>
                        </div>

                    </main>
                </div>
            }

        </Dashboard>
    )
}




export default withAuthUser({whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN, whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(AgencyView)

