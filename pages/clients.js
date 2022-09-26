import { AuthAction, withAuthUser} from "next-firebase-auth";
import AddClientButton from "../components/clients/buttons/AddClientButton";
import ClientExportButton from "../components/clients/buttons/ClientExportButton";
import FilterClientsButton from "../components/clients/buttons/FilterClientsButtons";
import Dashboard from "../components/dashboard/dashboard";





export  function UsersView({token}) {
    return (

        <Dashboard pageName={"Home - Clients"} token={token}>{
            <div>
            <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                <div className="px-12">
                    <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
                </div>
                <div className="flex flex-row space-x-3">
                        <FilterClientsButton></FilterClientsButton>
                        <ClientExportButton></ClientExportButton>
                        <AddClientButton></AddClientButton>
                        
                    </div>

            </header>

            <nav className="py-4 px-6">
                <div className="flex flex-col px-10">
                    <div>Retrouvez dans ce menu les données de tous les clients vous ayant achetés quelque chose.
                        vous pouvez en ajouter ou pour votre marketing en exporter.
                    </div>
                    
                </div>




            </nav>

        </div>
        }</Dashboard>
        
    )
}





export default withAuthUser({whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN, whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN })(UsersView)