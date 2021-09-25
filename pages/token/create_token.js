
import Dashboard from "../../components/dashboard/dashboard"
import { useMutation } from "@apollo/client"
import { Transition } from "@headlessui/react"
import { useState } from "react"
import { CREATE_NEW_TOKEN } from "../../mutation/CreateNewToken"
import { useNotification } from "../../notifications/NotificationContext"
import { InformationCircleIcon } from "@heroicons/react/solid"

const CreateToken = () => {
    const [name, setName] = useState("")
    const [tick, setTick] = useState("")
    const [decimals, setDecimals] = useState("")
    const [mintAuthority, setMintAuthority] = useState("")
    const [freezeAuthority, setFreezeAuthority] = useState("")

    const [CreateNewToken, { loading }] = useMutation(CREATE_NEW_TOKEN)
    const dispatch = useNotification()

    const handleCreateToken = (event) => {
        event.preventDefault()
        CreateNewToken({
            variables: {
                token: {
                    name: name,
                    symbol: tick,
                    decimals: parseInt(decimals),
                    mintAuthority: mintAuthority,
                    freezeAuthority: mintAuthority,
                    imgUrl: "https://img1.freepng.fr/20180904/thw/kisspng-dogecoin-portable-network-graphics-cryptocurrency-5b8ec4ed5d5872.4481355215360831813823.jpg",
                }
            }
        }).then(() => {
            setName("")
            setTick("")
            setDecimals("")
            setMintAuthority("")
            setFreezeAuthority("")
            dispatch({
                payload: {
                    type: "SUCCESS",
                    title: "Create Token",
                    message: "Bravo, vous etes inscrit"
                }
            })
        }).catch((err) => {
            dispatch({
                payload: {
                    type: "ERROR",
                    title: "Create Token",
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
                            <h1 className="text-3xl  text-gray-900 font-light font-montserrat">Create token</h1>
                        </div>
                        <div className="flex flex-row space-x-3">

                        </div>
                    </header>

                    <nav className="px-6">
                        <div className="flex flex-col px-10">
                            <div className="font-light font-montserrat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>

                            <div className="mx-auto w-2/5 mt-10">
                                <div className="flex flex-col relative p-4 space-y-3 items-center">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">
                                            Token Image
                                        </label>
                                        <div class="mt-1 flex justify-center px-36 w-full pt-5 pb-6 mb-5 border-2 border-gray-300 border-dashed rounded-md">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <div class="flex text-sm text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                    </label>
                                                    <p class="pl-1">or drag and drop</p>
                                                </div>
                                                <p class="text-xs text-gray-500">
                                                    PNG, JPG, JPEG up to 10MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <input required value={name} onChange={((e) => setName(e.target.value))}
                                        type="text"
                                        name="tokenname"
                                        id="tokenname"
                                        placeholder="Token name"
                                        className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                    />

                                    <input required value={tick} onChange={((e) => setTick(e.target.value))}
                                        type="text"
                                        name="tick"
                                        id="tick"
                                        placeholder="Token symbol"
                                        className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                    />


                                    <input required value={decimals} onChange={((e) => setDecimals(e.target.value))}
                                        type="number"
                                        name="decimals"
                                        id="decimals"
                                        placeholder="decimals"
                                        className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                    />

                                    <input required value={mintAuthority} onChange={((e) => setMintAuthority(e.target.value))}
                                        type="text"
                                        name="mintauthority"
                                        id="mintauthority"
                                        placeholder="Sol address of mint authority"
                                        className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                    />

                                    <input required value={freezeAuthority} onChange={((e) => setFreezeAuthority(e.target.value))}
                                        type="text"
                                        name="freezeauthority"
                                        id="freezeauthority"
                                        placeholder="Sol address of freeze authority"
                                        className="flex w-full  sm:text-sm bg-gray-200 h-10 px-3 rounded-lg focus:outline-none"
                                    />

                                    <div className="text-sm pt-8 flex flex-row space-x-3">
                                        <InformationCircleIcon className="h-8 w-8 text-yellow-600"></InformationCircleIcon>
                                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
                                    </div>


                                    <button disabled={!name.length || !tick.length || !decimals.length}
                                        type="button"
                                        className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-blue-900 disabled:opacity-50 bg-blue-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                        onClick={handleCreateToken}
                                    >

                                        <Transition show={loading}>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </Transition>
                                        <span>Create new token</span>
                                    </button>
                                </div>
                            </div>
                        </div>


                    </nav>
                </div>

            }
        </Dashboard>
    )
}



export default CreateToken