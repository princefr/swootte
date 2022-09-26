import { useQuery } from "@apollo/client";
import { Transition } from "@headlessui/react";
import { addDays } from "date-fns";
import { AuthAction, withAuthUser, withAuthUserTokenSSR} from "next-firebase-auth";
import { useMemo, useState } from "react";
import Dashboard from "../components/dashboard/dashboard";
import AddPaymentButton from "../components/paiements/Buttons/AddPaymentButton";
import PaiementTab from "../components/paiements/paimentTab";
import FilterTransfersButton from "../components/transferts/buttons/FilterTransfersButtons";
import TransferExportButton from "../components/transferts/buttons/TransferExportButton";
import { DateContext } from "../context/DateContext";
import { useSSrClientApollo } from "../lib/Auth";
import { GET_ALL_PAIEMENTS } from "../queries/getPaiements";
import { userInDatabase } from "../queries/getUser";




export const PaiementsItems = () => {
    const { loading, error, data, refetch } = useQuery(GET_ALL_PAIEMENTS)
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <Transition show={data.getAllPaiements.length > 0}>
                <div className="flex flex-col py-8">
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
                                        {
                                            data.getAllPaiements.map((paiement) => {
                                                return <tr>
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
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </Transition>
        </div>
    )
}

export function PaiementsView({ token }) {
    const pastMonth = new Date();
    const [range, setRange] = useState({ from: pastMonth, to: addDays(pastMonth, 1) });
    const useDateRange = useMemo(() => ({range, setRange}), [range, setRange]) 

    return (
        <DateContext.Provider value={useDateRange}>
        <Dashboard pageName={"Paiements"} token={token}>{
            <div>
                <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                    <div className="">
                        <h1 className="text-3xl font-bold text-gray-900">Paiements</h1>
                    </div>
                    <div className="flex flex-row space-x-3">
                        {/* <FilterTransfersButton></FilterTransfersButton>
                        <TransferExportButton></TransferExportButton> */}
                    </div>
                </header>

                <nav className="py-4 px-4">
                    <div className="flex flex-col">
                        <div>Retrouvrez tous les paiements ayant été envoyés vers votre adresse dans ce menu (achat physique, achat sur le web ou sur un site marchant). Les paiements sont organisés divisés par status pour vous donner la meilleure visibilité possible sur ce qui se passe avec les paiements effectués à votre entreprise.</div>
                        <PaiementTab></PaiementTab>
                    </div>




                </nav>
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



export default withAuthUser({ whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN })(PaiementsView)