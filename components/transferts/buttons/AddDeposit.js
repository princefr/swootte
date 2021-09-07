import { useMutation } from "@apollo/client"
import { RadioGroup, Transition } from "@headlessui/react"

import { useState } from "react"
import { CREATE_DEPOSIT } from "../../../mutation/CreateDeposit"
import { useNotification } from "../../../notifications/NotificationContext"


const plans = [
    {
        name: 'Mazala',
        adress: '12GB',
    },
    {
        name: 'Business',
        adress: '16GB',
    },
    {
        name: 'Enterprise',
        adress: '32GB',
    },
]


function AddDeposit() {
    const [selected, setSelected] = useState(plans[0])
    const [showPanel, setShowPanel] = useState(false)
    const [amount, setAmount] = useState("")

    const dismissPanel = (event) => {
        event.preventDefault()
        setShowPanel(false)
    }

    const [CreateWithDraw, { loading }] = useMutation(CREATE_DEPOSIT)
    const dispatch = useNotification()


    const handleWithDraw = (event) => {
        event.preventDefault()
        CreateWithDraw({
            variables: {

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
        <div className="relative inline-block">
            <button onClick={(() => { setShowPanel(true) })} className="transition ease-out duration-700 w-full mr-5  rounded-lg bg-gray-200  flex items-center space-x-4 px-5 py-2 focus:outline-none focus:shadow-outline text-xs font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="font-montserrat text-xs whitespace-nowrap">Nouveau dépot</span>
            </button>


            <Transition show={showPanel}>

                <div className="fixed z-50 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen  px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" onClick={dismissPanel} aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>


                        <span className="hidden sm:inline-block sm:align-top sm:h-24" aria-hidden="true">&#8203;</span>
                        <div className="relative w-auto my-2 mx-auto max-w-xl bg-white rounded-lg py-6">
                            <div className="flex flex-col relative p-4 space-y-3">
                                <div className="flex flex-row justify-between items-end">
                                    <div></div>
                                    <div onClick={dismissPanel} className="h-8 w-8 bg-gray-200 rounded-full text-center p-1">
                                        <a href="#">
                                            <svg className="w-6 h-6 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="item-start flex flex-col w-full px-3 text-left space-y-3">
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
                                        <RadioGroup value={selected} onChange={setSelected}>
                                            <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                                            <div className="space-y-2">
                                                {plans.map((plan) => (
                                                    <RadioGroup.Option
                                                        key={plan.name}
                                                        value={plan}
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
                                                                                {plan.name}
                                                                            </RadioGroup.Label>
                                                                            <RadioGroup.Description
                                                                                as="span"
                                                                                className={`inline ${checked ? 'text-blue-100' : 'text-gray-500'
                                                                                    }`}
                                                                            >
                                                                                <span>
                                                                                    {plan.adress}
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
                                            <span>Ask a deposit</span>
                                        </button>
                                    </div>

                                </div>






                            </div>
                        </div>
                    </div>
                </div>

            </Transition>

        </div>
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



export default AddDeposit