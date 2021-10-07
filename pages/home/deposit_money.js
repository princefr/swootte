
import Dashboard from "../../components/dashboard/dashboard"
import { useMutation } from "@apollo/client"
import { Transition } from "@headlessui/react"
import { useContext, useState } from "react"
import { CREATE_DEPOSIT } from "../../mutation/CreateDeposit"
import { useNotification } from "../../notifications/NotificationContext"
import { AgencySelect } from "./withdraw_money"
import { DeviseContext } from "../../context/DeviseContext"




const DepositMoney = () => {
    const [selected, setSelected] = useState(null)
    const [amount, setAmount] = useState("")
    const [CreateWithDraw, { loading }] = useMutation(CREATE_DEPOSIT)
    const {Devise, } = useContext(DeviseContext)

    const dispatch = useNotification()

    const handleDeposit = (event) => {
        event.preventDefault()
        CreateWithDraw({
            variables: {
                topup: {
                    amount: parseFloat(amount),
                    agency:  selected._id,
                    token: Devise.publicKey
                }
            }
        }).then((result) => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Dépot",
                    message: `Votre demande de dépot a été effectué, rendez vous sur place  à ${selected.title}, pour valider ce dépot`
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Dépot",
                    message: err.message
                }
            })
        })
    }

    return (
        <Dashboard pageName={"Send Money"}>
            {

                <div className="flex flex-col  w-full">

                    <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                        <div className="px-12">
                            <h1 className="text-3xl  text-gray-900 font-light font-montserrat">Deposer de l'argent</h1>
                        </div>
                    </header>

                    <nav className="px-6">
                        <div className="flex flex-col px-10">
                            <div className="font-light font-montserrat">Déposer de l'argent sur votre compte swootte en effectuant d'abord une demande de dépot et en allant ensuite deposer ensuite les fonds dans l'une de nos agences partenaire pour que le dépot soit crédité.</div>

                            <div className="mx-auto w-2/5 mt-10">
                                <div className="flex flex-col relative p-4 space-y-3 items-center">
                                    <div className="px-3 flex flex-col w-full mt-4 space-y-3">
                                        
                                            <h3 className="text-lg font-medium leading-6 text-gray-900 px-3">
                                                Effectuer un dépot
                                            </h3>
                                            <span className="text-sm items-start text-left px-3">
                                                
                                            </span>

                                            <div className="px-3 flex flex-col w-full mt-4 space-y-3">

                                                <input required value={amount} onChange={((e) => setAmount(e.target.value))}
                                                    type="number"
                                                    name="amount"
                                                    id="amount"
                                                    placeholder="montant à déposer"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                                />

                                            </div>

                                            <h3 className="text-sm font-medium leading-2 text-gray-900 px-3 pt-4">
                                                Agence de dépot
                                            </h3>

                                            <span className="text-sm items-start text-left px-3">Vous pouvez effectuer un dépot dans l'une de nos agences partenaires ci dessous. </span>
                                            <span className="text-xs items-start text-left px-3">*des frais supplumentaires peuvent etre applicable</span>

                                            <div className="w-full px-3 py-4">
                                                <AgencySelect selected={selected} setSelected={setSelected}/>
                                                <span className="text-xs items-start flex  text-left px-3 pt-10">

                                                </span>


                                                <button disabled={amount == null || amount <= 0}
                                                    type="button"
                                                    className="inline-flex w-full justify-center px-4 py-2 mt-4 text-sm font-medium text-white disabled:opacity-50 bg-black border border-transparent rounded-md hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                    onClick={handleDeposit}
                                                >


                                                    <Transition show={loading}>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                    </Transition>
                                                    <span>Demander un dépot</span>
                                                </button>
                                            </div>
                                        
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

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}



export default DepositMoney


