
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { Transition } from '@headlessui/react';
import { useContext, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { DeviseContext } from '../../context/DeviseContext';
import { GET_ACTIVITIES } from '../../queries/getActivities';
import { format } from 'date-fns'
import { CANCEL_TRANSACTION_USER } from '../../mutation/cancelTopupWithdrawMutation';
import ConfirmAnyScreen from '../ConfirmationPanels/ConfirmAnyScreen';
import { useNotification } from '../../notifications/NotificationContext';



const CancelTopupWithdrawUserButton = ({activity, refetch}) => {
    const [CancelTransaction, { loading }] = useMutation(CANCEL_TRANSACTION_USER)
    const [confirmationIsOpen, setOpenConfirmation] = useState(false)
    const closeConfirmation = () => setOpenConfirmation(false)
    const dispatch = useNotification()

    const handleCancelTransaction = (event) => {
        event.preventDefault()
        CancelTransaction({
            variables:{
                transaction_id: activity._id,
                type: activity.type
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Transaction",
                    message: "annulation confirmé"
                }
            })
            refetch()
            closeConfirmation()
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Transaction",
                    message: err.message
                }
            })
        })
    }

    return (
        <div className="relative">
            <button onClick={(()=> setOpenConfirmation(true))}  className="text-red-600 hover:text-red-900">Annuler</button>
            <Transition show={confirmationIsOpen}>
                <ConfirmAnyScreen handleCloseConfirmation={closeConfirmation}
                 confirmText={"Confirmer"} cancelText={"annuler"} 
                 handleConfirm={handleCancelTransaction}
                  confirmTitle={activity.__typename == "TopUp" ? "Confirmer l'annulation de votre rechargement": "Confirmer l'annulation de votre retrait"}
                   loading={loading}
                   ConfirmDesc={activity.__typename == "TopUp" ? "Souhaitez vous vraiment annuler votre rechargement": "Souhaitez vous vraiment annuler votre retrait"}></ConfirmAnyScreen>
            </Transition>
        </div>
    )
}



const ActivityItemShimmer = () => {
    return (
        <div className="flex flex-col px-12 py-4">
            <Skeleton count={5} height={60}></Skeleton>
        </div>
    )
}


const ActivityItem = ({ activity, refetch }) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                {activity.shortId}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {activity.amount}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {activity.status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {activity.type}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {format(new Date(activity.createdAt), "dd/MM/yyyy HH:mm:ss")}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Transition show={activity.__typename == "TopUp" && activity.status == "IN_PROGRESS"}>
                    <CancelTopupWithdrawUserButton activity={activity} refetch={refetch}></CancelTopupWithdrawUserButton>
                </Transition>
                <Transition show={activity.__typename == "Withdraw" && activity.status == "IN_PROGRESS"}>
                    <CancelTopupWithdrawUserButton activity={activity} refetch={refetch}></CancelTopupWithdrawUserButton>
                </Transition>
                
            </td>
        </tr>
    )
}


const ActiviyItems = ({ activities, refetch }) => {
    return (
    <div>
         <Transition show={!activities.length}>
            <div>Aucune activitée</div>
        </Transition>
        <Transition show={activities.length > 0}>
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Réference
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
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">

                {activities.map((activity) => {
                    return <ActivityItem activity={activity} key={activity._id} refetch={refetch}></ActivityItem>
                })}

            </tbody>
        </table>
        </Transition>
    </div>
    )
}

const ActivityView = () => {
    const { Devise, } = useContext(DeviseContext)
    const [GetActivities, { loading, error, data, refetch }] = useLazyQuery(GET_ACTIVITIES)

    useEffect(() => {
        if (Devise != null) GetActivities({ variables: { token: Devise.publicKey } })
    }, [Devise])

    if (loading) return <ActivityItemShimmer />;
    if (error) return null;
    if(data == null) return null
    return (
        <div className="flex flex-col px-12 py-4">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <ActiviyItems activities={data.getActivity} refetch={refetch}></ActiviyItems>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ActivityView