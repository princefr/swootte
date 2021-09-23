
import Dashboard from "../../components/dashboard/dashboard"
import { useMutation } from "@apollo/client"
import { Transition, Listbox } from "@headlessui/react"
import { Fragment, useContext, useEffect, useState } from "react"
import { ADD_EXISTING_TOKEN } from "../../mutation/AddExistingToken"
import AskPasswordToCompleteAction from "../../components/dialogs/AskPasswordToCompleteAction"
import { TokenListProvider } from '@solana/spl-token-registry';
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid"
import { FirebaseUIDContext } from "../../context/FirebaseUIDContext"
import { useNotification } from "../../notifications/NotificationContext"


const TokenListSearch = ({currentToken, setCurrentToken}) => {
    const [_tokens, setTokens] = useState()
    const [loading, setLoading] = useState(true)

    const isActive = (active) => {
        return active ? 'text-amber-600' : 'text-amber-400'
    }

    useEffect(() => {
        new TokenListProvider().resolve().then(async (tokens) => {
            // mainnet-beta
            // testnet
            // devnet
            const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();
            const all = await tokenList.filter((token) => token.tags != null && token.tags.includes('stablecoin'))
            setTokens(all);
            if (_tokens != null) setCurrentToken(_tokens[0])
            setLoading(false)
        });
    }, [])

    if (loading) return <p>Loading ...</p>;

    return (
        <div className="w-full rounded-lg">
            <Listbox value={currentToken} onChange={setCurrentToken}>
                <div className="relative mt-1">
                    <div className="space-x-1 flex flex-row items-center px-1">
                        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-200 rounded-lg  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                            {
                                currentToken ? <div className="flex flex-row space-x-3 items-center">
                                <img src={currentToken.logoURI} alt="token logo" className="h-8 w-8 object-cover rounded-full" />
                                <span className="block truncate">{currentToken.name}</span>
                            </div> : <span className="block truncate">Choisir un token</span>
                            }
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <ChevronDownIcon
                                    className="w-5 h-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>


                    </div>

                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >




                        <Listbox.Options className="absolute w-full py-1 mt-1 z-50 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {_tokens.map((token, tokenIdx) => (
                                <Listbox.Option
                                    key={tokenIdx}
                                    className={({ active }) =>
                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative  py-2 items-center pl-10 pr-6 px-4 hover:bg-blue-50`
                                    }
                                    value={token}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? 'font-medium' : 'font-normal'
                                                    } block truncate`}
                                            >
                                                {token.name}
                                            </span>

                                            <span className="flex  h-6 w-6 rounded-full absolute inset-y-0 left-0  items-center pl-3 ml-2 mt-1">
                                                <img src={token.logoURI} alt="token logo" className="flex absolute h-full w-full rounded-full object-cover -translate-x-3" />
                                            </span>
                                            


                                            {selected ? (
                                                <span
                                                    className={`${isActive(active)
                                                        }
                                absolute inset-y-0 right-0 flex items-center pr-3`}
                                                >
                                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                </span>
                                            ) : null}


                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}

const AddExistingToken = () => {
    const [openConfirmation, setOpenConfirmation] = useState(false)
    const [currentToken, setCurrentToken] = useState()
    const [AddNewToken, { loading }] = useMutation(ADD_EXISTING_TOKEN)
    const { firebaseUID, }  = useContext(FirebaseUIDContext)
    const dispatch = useNotification()

    const handleAddToken = (event) => {
        event.preventDefault()
        AddNewToken({
            variables: {
                token: {
                    publicKey : currentToken.address,
                    name: currentToken.name,
                    symbol: currentToken.symbol,
                    decimals: currentToken.decimals,
                    imgUrl: currentToken.logoURI,
                    creator: firebaseUID,
                    chainId: currentToken.chainId
                }
            }
        }).then(() => {
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Add Token",
                    message: "Bravo, vous etes inscrit"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Add Token",
                    message: err.message
                }
            })
        })

    }

    return (
        <Dashboard pageName={"Add Existing token"}>
            {

                <div className="flex flex-col  w-full">

                    <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                        <div className="px-12">
                            <h1 className="text-3xl  text-gray-900 font-light font-montserrat">Add existing token</h1>
                        </div>
                        <div className="flex flex-row space-x-3">

                        </div>
                    </header>

                    <nav className="px-6">
                        <div className="flex flex-col px-10">
                            <div className="font-light font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                            <div className="mx-auto w-2/5 mt-10">
                                <div className="flex flex-col relative p-4 space-y-3 items-center">
                                    <TokenListSearch currentToken={currentToken} setCurrentToken={setCurrentToken}></TokenListSearch>

                                    <div className="text-sm px-4 py-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </div>


                                    <button disabled={currentToken == null}
                                        type="button"
                                        className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        // onClick={(() => setOpenConfirmation(true))}
                                        onClick={handleAddToken}
                                    >

                                        <Transition show={loading}>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </Transition>
                                        <span>Add existing token</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <AskPasswordToCompleteAction isOpen={openConfirmation} runProcess={handleAddToken} setOpenModal={setOpenConfirmation}></AskPasswordToCompleteAction>
                </div>

            }
        </Dashboard>
    )
}



export default AddExistingToken