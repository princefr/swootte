import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon} from '@heroicons/react/solid'
import React, { Fragment, useEffect,  useState } from 'react'

import onClickOutside from "react-onclickoutside";
import data from '../../utils/countries.json'


const PhonePicker = ({ onChange, phoneValue, countryDisplayed, setCountryDisplayed }) => {
    const [showDropDown, setshowDropDown] = useState(false);
    const toggleDropdown = () => setshowDropDown(!showDropDown);
    PhonePicker.handleClickOutside = () => setshowDropDown(false)

    const [countryList, setCountryList] = useState(data);
    const [inputext, setInputext] = useState('');


    useEffect(() => {
        setCountryList(data);
    }, [])


    const handleChosingCountry = async (country) => {
        setInputext("")
        setCountryDisplayed(country)
        setshowDropDown(false)

    }




    const updateInput = async (input) => {
        const filtered = data.filter(country => {
            return country.name.toLowerCase().includes(input.toLowerCase())
        })
        setInputext(input.toLowerCase());
        setCountryList(filtered);
    }


    return (
        <div className="w-full rounded-lg">
            <Listbox value={countryDisplayed} onChange={setCountryDisplayed}>
                <div className="relative mt-1">
                    <div className="space-x-1 flex flex-row items-center">
                    <Listbox.Button className="relative w-30 py-2 pl-3 pr-10 text-left bg-gray-200 rounded-lg  cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{countryDisplayed.dial_code} ({countryDisplayed.code})</span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <ChevronDownIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <input value={phoneValue} type="text" onChange={(e)=> onChange(e.target.value)} name="price" id="price" className="h-10 w-full px-2 text-black bg-gray-100 rounded-lg  font-montserrat text-sm  focus:outline-none" placeholder="Tapez votre numéro de téléphone" />
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
                                                {country.name} ({country.dial_code})
                                            </span>
                                            {selected ? (
                                                <span
                                                    className={`${active ? 'text-amber-600' : 'text-amber-600'
                                                        }
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


const clickOutsideConfig = {
    handleClickOutside: () => PhonePicker.handleClickOutside
};

export default onClickOutside(PhonePicker, clickOutsideConfig);