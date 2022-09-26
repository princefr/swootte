

import Skeleton from "react-loading-skeleton"
import Trend from 'react-trend';

const ChartPanelLoading = () => {
    return (
        <article className="relative px-6 pt-12 pb-6 bg-white border border-gray-100 rounded-lg shadow-sm">
        <Trend
            smooth
            autoDraw
            radius={20} strokeWidth={4}
            autoDrawDuration={3000}
            autoDrawEasing="ease-in"
            data={[0, 10, 5, 22, 3.6, 11]} className={"absolute"} />
            <p className="text-sm font-medium text-gray-500"><Skeleton height={25} width={80}></Skeleton></p>
            <p className="inline-flex items-end mt-1">
                <span className="text-2xl font-medium leading-none"><Skeleton height={15} width={60}></Skeleton></span>
                <span className="ml-1 text-xs text-gray-500"><Skeleton height={5} width={60}></Skeleton></span>
            </p>

            <p className="absolute inline-flex p-1  rounded top-4 right-4">
                <Skeleton height={15} width={80} className="bg-red-100"></Skeleton>

                <span className="ml-1.5 text-xs font-medium">
                <Skeleton></Skeleton>
                </span>
            </p>
    </article>
    )
}

export default ChartPanelLoading