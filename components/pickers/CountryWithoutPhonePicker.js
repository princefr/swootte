import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'
import { Fragment, useEffect,  useState } from 'react'


import data from '../../utils/countries.json'


function CountryWithoutPhonePicker({ onChange, countryDisplayed, setCountryDisplayed }) {
    const [countryList, setCountryList] = useState(data);

    


    useEffect(() => {
        setCountryList(data);
        setCountryDisplayed(data[33])
    }, [])



    const isActive = (active) => {
        return active ? 'text-amber-600' : 'text-amber-400'
    }


    return (
        <div className="w-full rounded-lg">
            <Listbox value={countryDisplayed} onChange={setCountryDisplayed}>
                <div className="relative mt-1">
                    <div className="space-x-1 flex flex-row items-center px-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-200 rounded-lg  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{countryDisplayed? countryDisplayed.name: null}</span>
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
                            {countryList.map((country, countryIdx) => (
                                <Listbox.Option
                                    key={countryIdx}
                                    className={({ active }) =>
                                        `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                                    }
                                    value={country}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                                className={`${selected ? 'font-medium' : 'font-normal'
                                                    } block truncate`}
                                            >
                                                {country.name}
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`${isActive(active)}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
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

export default CountryWithoutPhonePicker;