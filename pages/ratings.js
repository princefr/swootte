

import Dashboard from "../components/dashboard/dashboard"
import ExportRatingsButton from "../components/ratings/buttons/ExportRatingButton"
import FilterRatingssButton from "../components/ratings/buttons/FilterRatingsButton"


export default function Ratings(){

    return (
        <Dashboard pageName={"Ratings"}>{
            <div>
            <header className="bg-white shadow-b flex flex-row justify-between items-start p-4">
                <div className="px-12">
                    <h1 className="text-3xl font-bold text-gray-900">Ratings</h1>
                </div>

                <div className="flex flex-row space-x-3">
                        <FilterRatingssButton></FilterRatingssButton>
                        <ExportRatingsButton></ExportRatingsButton>
                    </div>

            </header>
            </div>
            }</Dashboard>
    )
}