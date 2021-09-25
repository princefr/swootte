import { useMutation, useQuery } from '@apollo/client'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'
import { Fragment,   useContext,   useEffect,   useState } from 'react'
import { DeviseContext } from '../../context/DeviseContext'
import { FirebaseUIDContext } from '../../context/FirebaseUIDContext'
import { UPDATE_DEFAULT_CURRENCY } from '../../mutation/updateDefaultCurrency'
import { useNotification } from '../../notifications/NotificationContext'
import { GET_CURRENCIES } from '../../queries/getCurrencies'


  const DeviseListBox = ({selected, setSelected, data, userUID, refetch}) => {
       const [updateDefaultCurrency, { loading }] = useMutation(UPDATE_DEFAULT_CURRENCY)
       const dispatch = useNotification()

       useEffect(() => {
        if(selected != null){
            updateDefaultCurrency({
                variables: {
                    currency_id: selected.publicKey
                }
            }).then(() => {
                refetch()
            }).catch((err) => {
                dispatch({
                    payload: {
                        type: "ERROR",
                        title: "Default currency",
                        message: err.message
                    }
                })
            })
        }
       }, [selected])
       
      return (
        <div className="w-full rounded-lg mr-6">
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1">
                <div className="space-x-1 flex flex-row items-center px-1">
                <Listbox.Button className="relative w-30 py-2 pl-3 pr-10 text-left bg-gray-300 bg-opacity-40 rounded-lg  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <div className="flex truncate  flex-row space-x-3 items-center">
                    <span className="flex  h-6 w-6 rounded-full">
                        <img src={data.filter((currency) => currency.isDefault)[0].imgUrl} alt="token logo" className="flex h-full w-full rounded-full object-cover" />
                    </span>
                    <span className="text-gray-700">{data.filter((currency) => currency.isDefault)[0].name}</span>
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
                        {data.map((devise, deviseIdx) => (
                            <Listbox.Option
                                key={deviseIdx}
                                className={({ active }) =>
                                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                      cursor-default select-none relative  py-2 items-center pl-10 pr-6 px-4 hover:bg-blue-50`
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

                                        <span className="flex  h-6 w-6 rounded-full absolute inset-y-0 left-0  items-center pl-3 ml-2 mt-1">
                                            <img src={devise.imgUrl} alt="token logo" className="flex absolute h-full w-full rounded-full object-cover -translate-x-3" />
                                        </span>

                                        {selected ? (
                                            <span
                                                className={`${ active ? 'text-green-400' : 'text-green-400'
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


function DevisePicker(){
    const { firebaseUID, } = useContext(FirebaseUIDContext)
    const {Devise, setDevice} = useContext(DeviseContext)
    const {loading, error, data, refetch} = useQuery(GET_CURRENCIES)

    const [selected, setSelected] = useState(null)


    useEffect(() => {
        if(data != null) {
            const _default = data.getAllCurrencies.filter((currency) => currency.isDefault)[0]
            setSelected(_default)
        }
    }, [data])


    useEffect(() => {
        if(selected != null) setDevice(selected)
    }, [selected])

    if(selected == null) return null;
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>{error.message}</p>;


    return (
        <DeviseListBox selected={selected} setSelected={setSelected} data={data.getAllCurrencies} userUID={firebaseUID} refetch={refetch}></DeviseListBox>
  
    )
}


export default DevisePicker