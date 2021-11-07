import MainView from "../components/dashboard/mainview";
import Dashboard from "../components/dashboard/dashboard";
import {AuthAction, withAuthUser, withAuthUserTokenSSR} from "next-firebase-auth";
import { userInDatabase } from "../queries/getUser";
import initAuth from "../utils/initAuth";


initAuth()
export  function Home(){
    return (
        <div>
            <Dashboard pageName={"home - dashboard"}>{
                <MainView  displayName={"blabla"}></MainView>
            }</Dashboard>
        </div>

    )
}




export default withAuthUser({whenAuthed: AuthAction.RENDER, whenUnauthed: AuthAction.REDIRECT_TO_LOGIN, whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN })(Home)




