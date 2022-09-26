import MainView from "../components/dashboard/mainview";
import Dashboard from "../components/dashboard/dashboard";
import {AuthAction, withAuthUser, withAuthUserTokenSSR} from "next-firebase-auth";
import { useSSrClientApollo } from "../lib/Auth";
import { userInDatabase } from "../queries/getUser";




const Home = _props => {
    return (
        <div>
            <Dashboard pageName={"home - dashboard"}>{
                <MainView  displayName={"blabla"}></MainView>
            }</Dashboard>
        </div>

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


export default withAuthUser({whenAuthedBeforeRedirect: AuthAction.REDIRECT_TO_LOGIN})(Home)




