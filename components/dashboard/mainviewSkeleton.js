import Skeleton from "react-loading-skeleton"
import LoadingList from "../paiements/List/loadings/LoadingList"
import { PictureOnDashboardShimmer } from "./mainview"
import Trend from 'react-trend';
import ChartPanelLoading from "../charts/loadinds/ChartPanelLoading";




const MainViewSkeleton = () => {
    return (
        <div className="flex flex-col w-full h-full px-2">
        <div className="h-28 w-full bg-white border-t-1 border-black flex flex-row justify-between ">
            <PictureOnDashboardShimmer></PictureOnDashboardShimmer>
            <div className="flex flew-row justify-center space-x-6 items-center">
                <div className="flex flex-row space-x-4">
                <Skeleton height={40} width={120}/>
                <Skeleton height={40} width={120}/>
                </div>


            </div>
        </div>

        <div className="flex flex-row justify-between ">
            <div></div>
            <div className="flex flex-row space-x-4">
            <Skeleton height={35} width={180}/>
                <Skeleton height={35} width={180}/>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-10">
            <ChartPanelLoading/>
            <ChartPanelLoading/>
            <ChartPanelLoading/>
        </div>
        <LoadingList></LoadingList>
    </div>
    )
} 


export default MainViewSkeleton