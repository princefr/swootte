import Dashboard from "../../components/dashboard/dashboard"
import { useMutation } from "@apollo/client";
import { Transition } from "@headlessui/react";
import { useContext, useState } from "react";
import { useNotification } from "../../notifications/NotificationContext";
import { CREATE_TRANSFER } from "../../mutation/CreateTransfer";
import AskPasswordToCompleteAction from "../../components/dialogs/AskPasswordToCompleteAction";
import { usePasscode } from "../../passcode/passCodeContext";
import fr from "../../localization/fr";
import LoadingIcon from "../../components/icons/LoadingIcon";
import { AuthAction, withAuthUser, withAuthUserTokenSSR } from "next-firebase-auth";
import { useSSrClientApollo } from "../../lib/Auth";
import { userInDatabase } from "../../queries/getUser";
import { EnterpriseContext } from "../../context/EnterpriseContext";


const SendMoney = (props) => {
    const [adress, setAdress] = useState("")
    const [amount, setAmount] = useState()
    const dispatch = useNotification()
    const [CreateTransfer, { loading }] = useMutation(CREATE_TRANSFER)
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)

    const [confirmBool, setConfirm] = useState(false)
    const passcode = usePasscode()





    const handleCreateTransfer = (pinCode) => {
        CreateTransfer({
            variables: {
                enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id,
                publicKey: adress,
                amount: parseFloat(amount),
                pinCode: pinCode
            }
        }).then(() => {
            setAdress("")
            setAmount("")
            setConfirm(false)
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Send money",
                    message: "Votre argent à bien été envoyé"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Send money",
                    message: err.message
                }
            })
        })
    }

    const lanchPassCode = (event) => {
        event.preventDefault()
        passcode({
            payload: {
                type: "ENVOYER",
                title: "Entrer votre pinCode pour confirmer le transfert",
                confirm: handleCreateTransfer
            }
        })
    }

    return (
        <Dashboard pageName={"Send Money"}>
            {

                <div className="flex flex-col  w-full">
                    <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                        <div className="">
                            <h1 className="text-3xl font-bold text-gray-900 font-montserrat ">{fr.sendPageTitle}</h1>
                        </div>
                        <div className="flex flex-row space-x-3">

                        </div>
                    </header>


                    <nav className="py-4 px-4">
                        <div className="flex flex-col">
                            <div className="font-light font-montserrat">Envoyez de l'argent en instantanée et sans frais à une autre addresse Franc CFA numérique. nos transferts ne connaissent aucune frontière, ils sont gratuits pour dans transferts dans le pays ou à l'international .</div>

                            <div className="mx-auto w-2/5 mt-10">
                                <div className="flex flex-col relative p-4 space-y-3 items-center">
                                    <div className="px-3 flex flex-col w-full mt-4 space-y-3">
                                        <input required value={adress} onChange={((e) => setAdress(e.target.value))}
                                            type="text"
                                            name="wallet-adress"
                                            id="wallet-adress"
                                            placeholder="L'addresse du receveur"
                                            className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                        />

                                        <input required value={amount} onChange={((e) => setAmount(e.target.value))}
                                            type="number"
                                            name="amount"
                                            id="amount"
                                            placeholder="Montant à envoyer"
                                            className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                        />
                                    </div>

                                    <span className="text-xs items-start text-left px-3 py-1 font-light">
                                        
                                    </span>

                                    <div className="w-full px-3">
                                        <button disabled={!adress.length || amount == null || amount <= 0}
                                            type="button"
                                            className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-white  bg-black  hover:bg-opacity-80 focus:outline-none"
                                            onClick={lanchPassCode}
                                        >

                                            <Transition show={loading}>
                                                <LoadingIcon/>
                                            </Transition>
                                            <span>Envoyer</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </nav>
                </div>

        

            }
        </Dashboard>
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

export default withAuthUser({whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN})(SendMoney)