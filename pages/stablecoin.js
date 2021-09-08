

import Dashboard from "../components/dashboard/dashboard"


export default function StableCoin(){

    return (
        <Dashboard pageName={"Ratings"}>{
            <div>
            <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                <div className="px-12">
                    <h1 className="text-3xl font-bold text-gray-900">Stablecoins</h1>
                </div>
                <div className="flex flex-row space-x-4 inline-block">
                    <button className="transition ease-out duration-700 w-full mr-5  rounded-lg bg-gray-200  flex items-center space-x-4 px-5 py-1 focus:outline-none focus:shadow-outline text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="font-montserrat text-sm">Creer un stablecoin</span>
                    </button>

                    <button className="transition ease-out duration-700 w-full mr-5  rounded-lg bg-gray-200  flex items-center space-x-4 px-5 py-1 focus:outline-none focus:shadow-outline text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="font-montserrat text-sm">Mint</span>
                    </button>

                    <button className="transition ease-out duration-700 w-full mr-5  rounded-lg bg-gray-200  flex items-center space-x-4 px-5 py-1 focus:outline-none focus:shadow-outline text-xs font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="font-montserrat text-sm">Burn</span>
                    </button>
                </div>

            </header>

            
            </div>
            }</Dashboard>
    )
}