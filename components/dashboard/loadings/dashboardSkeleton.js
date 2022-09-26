import MainViewSkeleton from "../mainviewSkeleton"
import SideBarSkeleton from "./SideBarSkeleton"




const DashboardSkeleton = () => {
    return(  
        <div className="flex flex-col">
            <div className="flex flex-row h-screen w-full">
            <SideBarSkeleton></SideBarSkeleton>
            <div className="flex Content w-full ml-16 px-2">
                <MainViewSkeleton></MainViewSkeleton>
            </div>
        </div>
        </div>
      
    )
}


export default DashboardSkeleton