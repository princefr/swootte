
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
                    title: "Withdraw",
                    message: "Votre argent à bien été envoyé"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Withdraw",
                    message: "Votre argent à bien été envoyé"
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
                            <div className="font-light font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                            <div className="mx-auto w-2/5 mt-10">
                                <div className="flex flex-col relative p-4 space-y-3 items-center">
                                    <div className="px-3 flex flex-col w-full mt-4 space-y-3">
                                        
                                            <h3 className="text-lg font-medium leading-6 text-gray-900 px-3">
                                                Effectuer un dépot
                                            </h3>
                                            <span className="text-sm items-start text-left px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>

                                            <div className="px-3 flex flex-col w-full mt-4 space-y-3">

                                                <input required value={amount} onChange={((e) => setAmount(e.target.value))}
                                                    type="number"
                                                    name="amount"
                                                    id="amount"
                                                    placeholder="Amount to deposit"
                                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                                />

                                            </div>

                                            <h3 className="text-sm font-medium leading-2 text-gray-900 px-3 pt-4">
                                                Agence de dépot
                                            </h3>

                                            <span className="text-sm items-start text-left px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>

                                            <div className="w-full px-3 py-4">
                                                <AgencySelect selected={selected} setSelected={setSelected}/>
                                                <span className="text-xs items-start flex  text-left px-3 pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utklabore et dolore magna aliqua</span>


                                                <button disabled={amount == null || amount <= 0}
                                                    type="button"
                                                    className="inline-flex w-full justify-center px-4 py-2 mt-4 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                    onClick={handleDeposit}
                                                >


                                                    <Transition show={loading}>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                    </Transition>
                                                    <span>Ask a deposit</span>
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


