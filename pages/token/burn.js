import {useState } from "react"
import { Transition } from "@headlessui/react"
import { useMutation } from "@apollo/client"
import Dashboard from "../../components/dashboard/dashboard"
import { useNotification } from "../../notifications/NotificationContext"
import { BURN_TOKENS } from "../../mutation/burnTokens"
import AskPasswordToCompleteAction from "../../components/dialogs/AskPasswordToCompleteAction"
import LoadingIcon from "../../components/icons/LoadingIcon"

const Burn = () => {
    const [amount, setAmount] = useState("")
    const [address, setAddress] = useState("")
    const dispatch = useNotification()

    const [openConfirmation, setOpenConfirmation] = useState(false)

    const [BurnTokens, { loading }] = useMutation(BURN_TOKENS)


    const handleBurnTokens = () => {
        BurnTokens({
            variables: {
                address : address,
                token: "GvWfymh6DW5cQ1n8KuvdN5yjPEbeFmwqBSz6MhyLX6qe",
                amount: parseFloat(amount)
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Mint tokens",
                    message: "tokens burn"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Burn tokens",
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
                            <h1 className="text-3xl  text-gray-900 font-light font-montserrat">Burn tokens</h1>
                        </div>
                        <div className="flex flex-row space-x-3">

                        </div>
                    </header>

                    <nav className="px-6">
                        <div className="flex flex-col px-10">
                            <div className="font-light font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                            <div className="mx-auto w-2/5 mt-10">
                                <div className="flex flex-col relative p-4 space-y-3 items-center">

                                <input required value={amount} onChange={((e) => setAmount(e.target.value))}
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    placeholder="Amount to burn"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />


                                <input required value={address} onChange={((e) => setAddress(e.target.value))}
                                    type="text"
                                    name="address"
                                    id="amount"
                                    placeholder="Adress where to burn"
                                    className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                />



                                <button disabled={!address.length || amount == null || amount <= 0 || !address.length}
                                    type="button"
                                    className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                    onClick={(() => {setOpenConfirmation(true)})}
                                >

                                    <Transition show={loading}>
                                        <LoadingIcon/>
                                    </Transition>
                                    <span>Burn tokens</span>
                                </button>
                                </div>
                            </div>
                        </div>


                    </nav>

                    <AskPasswordToCompleteAction isOpen={openConfirmation} runProcess={handleBurnTokens} setOpenModal={setOpenConfirmation}></AskPasswordToCompleteAction>
                </div>

            }
        </Dashboard>
    )
}



export default Burn