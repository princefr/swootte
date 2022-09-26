import { useLazyQuery} from "@apollo/client"
import { useContext, useEffect } from "react"
import { DateContext } from "../../context/DateContext"
import { EnterpriseContext } from "../../context/EnterpriseContext"
import { GET_PROFIT_NON_CAPTURED_CHART_DATA } from "../../queries/dashboard/getProfilNonCapturedChartData"
import ChartPanelLoading from "./loadinds/ChartPanelLoading"
import Trend from 'react-trend';
import { startOfDay } from "date-fns"
import { TrendingUpIcon, TrendingDownIcon } from "@heroicons/react/outline"




const NonCapturedChartPanel = ( ) => {
    const [GetNonCapturedData, {loading, error, data, refetch}] = useLazyQuery(GET_PROFIT_NON_CAPTURED_CHART_DATA)
    const {range, setRange} = useContext(DateContext) 
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)
    
    useEffect(() => {
        if(!enterpriseId.length) return;
        GetNonCapturedData({
            variables: {enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id, from: startOfDay(range.from), to: range.to}
        })
    }, [enterpriseId])

    useEffect(() => {
        if(!enterpriseId.length) return;
        GetNonCapturedData({
            variables: {enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id, from: startOfDay(range.from), to: range.to}
        })
    }, [range])



    if(loading) return <ChartPanelLoading/>
    if(error) return null;
    if(!data) return null;
    if(!data.getProfilNonCarpturedChartData) return null
    return (
        <article className="relative px-6 pt-12 pb-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                    <Trend
                        smooth
                        autoDraw
                        radius={20} strokeWidth={4}
                        autoDrawDuration={3000}
                        autoDrawEasing="ease-in"
                        data={data.getProfilNonCarpturedChartData.chart} className={"absolute"} />
                        <p className="text-sm font-medium text-gray-500">Paiements non capturés</p>
                        <p className="inline-flex items-end mt-1">
                            <span className="text-2xl font-medium leading-none">cfa {data.getProfilNonCarpturedChartData.currentTotal}</span>
                            <span className="ml-1 text-xs text-gray-500">from cfa {data.getProfilNonCarpturedChartData.formerTotal}</span>
                        </p>

                        <p className={`absolute inline-flex p-1 rounded top-4 right-4 ${data.getProfilNonCarpturedChartData.isPositive && data.getProfilNonCarpturedChartData.currentTotal > 0 ? "text-green-600 bg-green-100": data.getProfilNonCarpturedChartData.currentTotal == 0 ? "text-blue-600 bg-blue-100" : "text-red-600 bg-red-100"}`}>
                            {data.getProfilNonCarpturedChartData.isPositive && data.getProfilNonCarpturedChartData.currentTotal > 0 ? <TrendingUpIcon className="w-4 h-4"/> : data.getProfilNonCarpturedChartData.currentTotal == 0 ? null : <TrendingDownIcon className="w-4 h-4"/>}
                            <span className="ml-1.5 text-xs font-medium">
                            {data.getProfilNonCarpturedChartData.pourcentageDifference == 0 && data.getProfilNonCarpturedChartData.currentTotal > 0 ? "∞"  : data.getProfilNonCarpturedChartData.currentTotal == 0 ? "0" : Math.round(data.getProfilNonCarpturedChartData.pourcentageDifference)}%
                            </span>
                        </p>
                </article>
    )
}



export default NonCapturedChartPanel

