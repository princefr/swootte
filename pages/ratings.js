

import { AuthAction, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth"
import Dashboard from "../components/dashboard/dashboard"
import ExportRatingsButton from "../components/ratings/buttons/ExportRatingButton"
import FilterRatingssButton from "../components/ratings/buttons/FilterRatingsButton"


export  function Ratings({token}) {

    return (
        <Dashboard pageName={"Home - Ratings"} token= {token}>{
            <div>
                <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                    <div className="px-8">
                        <h1 className="text-3xl font-bold text-gray-900">Ratings</h1>
                    </div>

                    <div className="flex flex-row space-x-3">
                        <FilterRatingssButton></FilterRatingssButton>
                        <ExportRatingsButton></ExportRatingsButton>
                    </div>

                </header>

                <div className="flex flex-col px-12">
                    <div className="flex flex-col">
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
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


export default withAuthUser()(Ratings)