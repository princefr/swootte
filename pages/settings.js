

import { TrashIcon } from "@heroicons/react/outline"
import { AuthAction, withAuthUser, withAuthUserTokenSSR} from "next-firebase-auth"
import Dashboard from "../components/dashboard/dashboard"
import EnterpriseSettingsTab from "../components/settings/EnterpriseSettingsTab"
import { useSSrClientApollo } from "../lib/Auth"
import { userInDatabase } from "../queries/getUser"


export function Settings({token}){

    return (
        <Dashboard pageName={"Settings"} token={token}>{
            <div>
            <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                <div className="">
                    <h1 className="text-3xl font-bold text-gray-900">Paramètres de l'entreprise</h1>
                </div>

            </header>
            <div className="flex flex-col px-4">
                    <div className="flex flex-col">
                        <div>Retrouvez dans ce menu les informations renseignés lors de la creation de votre entreprise. certaines informations sont obligatoires.</div>
                    </div>

                    <EnterpriseSettingsTab></EnterpriseSettingsTab>
                </div>
            </div>
            }</Dashboard>
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


export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN })(Settings)