

import { AuthAction, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth"
import Dashboard from "../components/dashboard/dashboard"


export function Settings({token}){

    return (
        <Dashboard pageName={"Settings"} token={token}>{
            <div>
            <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                <div className="px-12">
                    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                </div>

            </header>
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


export default withAuthUser()(Settings)