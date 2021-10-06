import MainView from "../components/dashboard/mainview";
import Dashboard from "../components/dashboard/dashboard";
import { AuthAction, useAuthUser, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import { getDefaultToken } from "../queries/getUser";


export  function  Home({token}){
  const AuthUser = useAuthUser()
    return (
        <div>
            <Dashboard pageName={"home - dashboard"} token={token}>{
                <MainView  displayName={"blabla"} token={token}></MainView>
            }</Dashboard>
        </div>

    )
}



export const getServerSideProps = withAuthUserTokenSSR({
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
  })(async ({ AuthUser }) => {
    const token = await AuthUser.getIdToken()
    const { data } = await getDefaultToken(token)
    return {
      props: {
        token: data.usersExist.defaultWallet
      }
    }
  }) 



export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(Home)




