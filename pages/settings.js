

import Dashboard from "../components/dashboard/dashboard"


export default function Settings(){

    return (
        <Dashboard pageName={"Settings"}>{
            <div>
            <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                <div className="px-12">
                    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                </div>

            </header>
            </div>
            }</Dashboard>
    )
}