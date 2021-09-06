import { useState } from "react"
import onClickOutside from "react-onclickoutside";






function StableCoinSelect({}){

    const [dropdown, showDropdown] = useState(false)
    const toggleDropdown = () => showDropdown(!dropdown);
    StableCoinSelect.handleClickOutside = () => showDropdown(false)
    return (
        <div className="relative inline-block">
            <button onClick={toggleDropdown} className="group h-8 w-32 space-x-3 flex flex-row ring-1 ring-gray-300 rounded-full items-center px-2 justify-between mr-10 focus:border  focus:ring-red-300 hover:ring-red-300">
                        <span className="h-6 w-6 rounded-full bg-black"></span>
                        <span className="flex text-sm font-montserrat text-gray-600">USDC</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
            </button>


            {
                dropdown ? 
                <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                        <div className="flex flex-row p-2 justify-between items-center">
                            <button className="h-8 px-2">
                                <div className="flex flex-row space-x-3 items-center">
                                    <span className="h-6 w-6 rounded-full bg-black"></span>
                                    <span className="flex text-sm font-montserrat text-gray-600">USDC</span>
                                </div>
                            </button>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            
                        </div>
                    </div>
                </div> : null
            }
        </div>
    )
}


const clickOutsideConfig = {
    handleClickOutside: () => StableCoinSelect.handleClickOutside
};

export default onClickOutside(StableCoinSelect, clickOutsideConfig);