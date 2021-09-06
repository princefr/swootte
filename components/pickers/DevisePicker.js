import { useQuery } from '@apollo/client'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'
import { Fragment,   useContext,   useState } from 'react'
import { FirebaseUIDContext } from '../../context/FirebaseUIDContext'
import { GET_CURRENCIES } from '../../queries/getCurrencies'

const devises = [
    { name: 'USDC' },
    { name: 'USDT' },
    { name: 'EURT' },
  ]



function DevisePicker(){
    const { firebaseUID, } = useContext(FirebaseUIDContext)
    const {loading, error, data} = useQuery(GET_CURRENCIES, {
        variables: {
            firebase_uid: firebaseUID
        }
    })
    
    const [selected, setSelected] = useState(devises[0])
    return (
        <div className="w-full rounded-lg mr-6">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="space-x-1 flex flex-row items-center px-1">
                    <Listbox.Button className="relative w-30 py-2 pl-3 pr-10 text-left bg-gray-300 bg-opacity-40 rounded-lg  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <div className="flex truncate  flex-row space-x-3 items-center">
                        <span className="flex bg-black h-6 w-6 rounded-full"></span>
                        <span className="text-gray-700">{selected.name}</span>
                        </div>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDownIcon
                                className="w-5 h-5 text-gray-700"
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
                            {devises.map((devise, deviseIdx) => (
                                <Listbox.Option
                                    key={deviseIdx}
                                    className={({ active }) =>
                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative  py-2 items-center pl-10 pr-6 px-4`
                                    }
                                    value={devise}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? 'font-medium' : 'font-normal'
                                                    } block truncate`}
                                            >
                                                {devise.name} 
                                            </span>

                                            <span className="flex bg-black h-6 w-6 rounded-full absolute inset-y-0 left-0  items-center pl-3 ml-2 mt-1"></span>

                                            {selected ? (
                                                <span
                                                    className={`${active ? 'text-green-400' : 'text-green-400'
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


export default DevisePicker