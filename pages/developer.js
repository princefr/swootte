import Dashboard from '../components/dashboard/dashboard'
import { AuthAction, withAuthUser, withAuthUserTokenSSR} from "next-firebase-auth";
import { ClipboardIcon, KeyIcon } from '@heroicons/react/outline';
import RefreshPrivateKeyButton from '../components/developer/buttons/refreshPrivateKeyButton';
import RefreshPublishableKeyButton from '../components/developer/buttons/refreshPublishibleKeyButton';
import { useContext } from 'react';
import { EnterpriseContext } from '../context/EnterpriseContext';
import { useSSrClientApollo } from '../lib/Auth';
import { userInDatabase } from '../queries/getUser';

const Developer = ({ token }) => {
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)

    

    return (
        <Dashboard pageName={"Developpeur"} token={token}>{
            <div className='flex flex-col h-full w-full'>
                <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                    <div className="">
                        <h1 className="text-3xl font-bold text-gray-900">Developpeur</h1>
                    </div>
                </header>

                <main>
                <nav className="py-4 px-4">
                    <div className="flex flex-col">
                        <div>Retrouvez vos clés vous permettant de faire fonctionner vos differents modules externe proposé par nos services (Woocommerce etc). Veuillez à bien garder vos clés secretes et dans le cas ou elles sont divilgués pensez à les renouveller. </div>
                        <div className='relative flex flex-row w-full mt-10 bg-gray-100 rounded-lg items-center justify-between'>
                            <div className='flex flex-row items-center justify-center'>
                                <KeyIcon className='h-6 w-6 ml-2'></KeyIcon>
                                <span className='ml-2'>Privatekey:</span>
                                <div  className=' w-full py-2 pl-2 pr-8 outline-none focus:outline-none'>
                                {enterpriseId.length > 0 ? enterpriseId.filter((enterprise) => enterprise.default_enterprise)[0].private_key : null}
                                </div>
                            </div>

                            <div className='flex flex-row px-2 space-x-2'>
                            <button className="flex bg-green-200 p-2 rounded-full  text-white justify-center items-center space-x-3 font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 font-montserrat">
                                    <ClipboardIcon className='h-4 w-4 text-green-400'></ClipboardIcon>
                            </button>

                            <RefreshPrivateKeyButton/>
                            </div>


                        </div>

                        <div className='relative flex flex-row w-full mt-1 bg-gray-100 rounded-lg  items-center justify-between'>
                            <div className='flex flex-row items-center justify-center'>
                                <KeyIcon className='h-6 w-6 ml-2'></KeyIcon>
                                <span className='ml-2'>PublishibableKey:</span>
                                <div  className=' w-full py-2 pl-2 pr-8 outline-none focus:outline-none'>
                                {enterpriseId.length > 0 ? enterpriseId.filter((enterprise) => enterprise.default_enterprise)[0].publishableKey : null}
                                </div>
                            </div>

                            <div className='flex flex-row px-2 space-x-2'>
                            <button className="flex bg-green-200 p-2 rounded-full  text-white justify-center items-center space-x-3 font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400 font-montserrat">
                                    <ClipboardIcon className='h-4 w-4  text-green-400'></ClipboardIcon>
                            </button>

                            <RefreshPublishableKeyButton/>
                            </div>


                        </div>


                    </div>
                    




                </nav>
                    
                </main>
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



export default withAuthUser({whenAuthedBeforeRedirect: AuthAction.REDIRECT_TO_LOGIN})(Developer)