import React, { useState, useEffect } from "react";
import onClickOutside from "react-onclickoutside";
import  data from '../utils/countries.json' 


function CountryPicker({onChange, countryDisplayed, setCountryDisplayed}) {
    const [showDropDown, setshowDropDown] = useState(false);
    const toggleDropdown = () => setshowDropDown(!showDropDown);
    CountryPicker.handleClickOutside = () => setshowDropDown(false)

    const [countryList, setCountryList] = useState();
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
        <div className="relative inline-block text-left font-montserrat w-full">
            <div className="mt-1 relative  shadow-sm w-full">
                <button onClick={toggleDropdown} className="flex flex-row absolute inset-y-0 left-0 pl-3 items-center space-x-1 focus:outline-none">
                    <span className="text-gray-500 sm:text-sm font-montserrat">
                        {countryDisplayed.dial_code} ({countryDisplayed.code})
                        </span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <input type="text" onChange={(e)=> onChange(e.target.value)} name="price" id="price" className="h-10 w-full px-5 pr-10 pl-28 font-montserrat text-sm  focus:outline-none focus:ring-2 focus:ring-offset-black focus:ring-black border-2 border-gray-300" placeholder="Tapez votre numéro de téléphone" />
            </div>

            {
                showDropDown ?
                    <div className="space-y-1 transition-opacity h-96 delay-200 duration-150 bg-white w-full  ease-in-out origin-top-right absolute right-0 shadow-lg divide-y divide-gray-100 focus:outline-none"
                     role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div className="flex  w-full top-0 sticky" role="none">
                            <input value={inputext} placeholder={"Rechercher un pays..."} onChange={(e) => updateInput(e.target.value)} className="w-full px-4 py-1   border-b border-gray-400 font-montserrat text-sm focus:outline-none"></input>
                        </div>
                        <div className="flex-shrink px-4 h-full overflow-y-auto  bg-white space-y-2">
                            {countryList.map((e) => {
                                return <p className="font-montserrat text-sm" onClick={() => handleChosingCountry(e)}>{e.name} ({e.dial_code})</p>
                            })}
                        </div>


                    </div> : null
            }

        </div>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () => CountryPicker.handleClickOutside
};

export default onClickOutside(CountryPicker, clickOutsideConfig);