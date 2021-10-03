
import Dashboard from "../../components/dashboard/dashboard"
import { useMutation, useQuery } from "@apollo/client"
import { RadioGroup, Transition } from "@headlessui/react"

import { useEffect, useState } from "react"
import { CREATE_WITHDRAW } from "../../mutation/CreateWithDraw"
import { useNotification } from "../../notifications/NotificationContext"
import { GET_AGENCIES } from "../../queries/getAgencies"


export const AgencySelect = ({ selected, setSelected }) => {

    const { loading, error, data, refetch } = useQuery(GET_AGENCIES)


    useEffect(() => {
        if(data != null) setSelected(data.retrieveAllAgnecies[0])
    }, [data])

    if (loading) return <div>djkdj</div>;
    if (error) return null;

    return (
        <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className="sr-only">Addresse de dépot</RadioGroup.Label>
            <div className="space-y-2">
                {data.retrieveAllAgnecies.map((agency) => (
                    <RadioGroup.Option
                        key={agency.title}
                        value={agency}
                        className={({ active, checked }) =>
                            `${active
                                ? 'ring-2 ring-offset-2 ring-offset-green-300 ring-white ring-opacity-60'
                                : ''
                            }
                                                        ${checked ? 'bg-green-700 bg-opacity-75 text-white' : 'bg-blue-100'
                            }
                                                        relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                        }
                    >
                        {({ active, checked }) => (
                            <>

                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <div className="text-sm">
                                            <RadioGroup.Label
                                                as="p"
                                                className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'
                                                    }`}
                                            >
                                                {agency.title}
                                            </RadioGroup.Label>
                                            <RadioGroup.Description
                                                as="span"
                                                className={`inline ${checked ? 'text-blue-100' : 'text-gray-500'
                                                    }`}
                                            >
                                                <span>
                                                    {agency.address}
                                                </span>
                                            </RadioGroup.Description>
                                        </div>
                                    </div>
                                    {checked && (
                                        <div className="flex-shrink-0 text-white">
                                            <CheckIcon height={24} width={24}></CheckIcon>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}





const WithdrawMoney = () => {
    const [selected, setSelected] = useState(null)
    const [amount, setAmount] = useState("")

    const [CreateWithDraw, { loading }] = useMutation(CREATE_WITHDRAW)
    const dispatch = useNotification()

    const handleWithDraw = (event) => {
        event.preventDefault()
        CreateWithDraw({
            variables: {
                withdraw: {
                    amount: parseFloat(amount),
                    agency:  selected._id
                }
            }
        }).then((result) => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Withdraw",
                    message: "Votre demande de retrait a été bien enregistré"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Withdraw",
                    message: err.message
                }
            })
        })
    }

    return (
        <Dashboard pageName={"Withdraw money"}>
            {

                <div className="flex flex-col  w-full">

                    <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                        <div className="px-12">
                            <h1 className="text-3xl  text-gray-900 font-light font-montserrat">Retirer de l'argent</h1>
                        </div>
                        <div className="flex flex-row space-x-3">

                        </div>
                    </header>

                    <nav className="px-6">
                        <div className="flex flex-col px-10">
                            <div className="font-light font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                            <div className="mx-auto w-2/5 mt-10">
                                <div className="flex flex-col relative p-4 space-y-3 items-center">
                                    <div className="px-3 flex flex-col w-full mt-4 space-y-3">

                                        <h3 className="text-lg font-medium leading-6 text-gray-900 px-3">
                                            Effectuer un retrait
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

                                            <AgencySelect selected={selected} setSelected={setSelected}></AgencySelect>

                                            <span className="text-xs items-start flex  text-left px-3 pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utklabore et dolore magna aliqua</span>


                                            <button disabled={amount == null || amount <= 0}
                                                type="button"
                                                className="inline-flex w-full justify-center px-4 py-2 mt-4 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                                onClick={handleWithDraw}
                                            >


                                                <Transition show={loading}>
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                </Transition>
                                                <span>Ask a withdraw</span>
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


export default WithdrawMoney