
import { useMutation, useQuery } from "@apollo/client";
import { Transition } from "@headlessui/react";
import { UserRemoveIcon } from "@heroicons/react/solid";
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import ClientExportButton from "../components/clients/buttons/ClientExportButton";
import FilterClientsButton from "../components/clients/buttons/FilterClientsButtons";
import Dashboard from "../components/dashboard/dashboard";
import { SpinLogo } from "../components/items/productItem";
import { REMOVE_CONTACT } from "../mutation/removeContact";
import { useNotification } from "../notifications/NotificationContext";
import { GET_ALL_CONTACTS } from "../queries/getContacts";


const RemoveContactButton = ({contact, refetch}) => {
    const [RemoveContact, { loading }] = useMutation(REMOVE_CONTACT)
    const dispatch = useNotification()



    const handleRemoveContact = (event) => {
        event.preventDefault()
        RemoveContact({
            variables: {
                contact_id: contact._id
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Product",
                    message: "success removing product"
                }
            })
            refetch()
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Product",
                    message: err.message
                }
            })
        })
    }

    return (
        <button onClick={handleRemoveContact} className="flex flex-row space-x-2 items-center bg-red-500 p-1 px-2 text-white rounded-lg">
                <Transition show={!loading}>
                    <UserRemoveIcon className="h-4"></UserRemoveIcon>
                </Transition>
                <Transition show={loading}>
                    <SpinLogo height={"h-4"} width={"w-4"}></SpinLogo>
                </Transition>
                <span>Remove</span>
       </button>
    )
}

export const ContactItem = ({contact, refetch}) =>{
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
                                <RemoveContactButton contact={contact} refetch={refetch}></RemoveContactButton>
                            </td>
                        </tr>
                    </tbody>
)
}

export function ContactItems() {
    const { loading, error, data, refetch } = useQuery(GET_ALL_CONTACTS)
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <Transition show={data.getAllUserContact.length > 0}>
            <div className="-my-2 overflow-x-auto sm:-mx-6 mt-5 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Nom
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Description
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Role
                                                </th>
                                                
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Edit</span>
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">View</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        {data.getAllUserContact.map((contact) => {
                                                return <ContactItem contact={contact} refetch={refetch}></ContactItem>

                                            })}
                                    </table>
                                </div>
                            </div>
                        </div>
        </Transition>



    )
}


export function ContactView({ token }) {

    return (
        <Dashboard pageName={"Contacts"} token={token}>{
            <div>
                <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                    <div className="px-12">
                        <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
                    </div>

                    {/* <SearchContact /> */}

                    <div className="flex flex-row space-x-3">
                        <FilterClientsButton></FilterClientsButton>
                        <ClientExportButton></ClientExportButton>
                    </div>

                </header>

                <nav className="py-4 px-6">
                    <div className="flex flex-col px-10">
                        <div>Retrouvez dans ce menu tout vos contacts ayant été ajouter par vous , via la barre de recherche. il vous est possible d'en exporter</div>
                        <ContactItems></ContactItems>

                        
                    </div>




                </nav>

            </div>
        }</Dashboard>

    )
}


export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser }) => {
    const token = await AuthUser.getIdToken()
    return {
        props: {
            token: token
        }
    }
})


export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(ContactView)