
import { useQuery } from "@apollo/client"
import {useMemo, useState } from "react"
import ReceiveMoneyButton from "../buttons/ReceiveMoneyButton"
import SendMoneyButton from "../buttons/SendMoneyButton"
import { PhotoView } from "./userpicture"
import Skeleton from 'react-loading-skeleton';
import { CalendarIcon } from "@heroicons/react/outline"
import FilterDaysListBox from "../listbox/filtersDayListBox"
import EnterpriseDateRangeSelection from "../enterprise/buttons/selectDate"
import PinCodeModal from "../pincode/pincodeModal"
import { DateContext } from "../../context/DateContext"
import { addDays} from 'date-fns';
import fr from 'date-fns/locale/fr';
import AllPaymentsList from "../paiements/List/allPaymentslist"
import ProfitNetChartPanel from "../charts/ProfilNetChartPanel"
import ProfitBrutChartPanel from "../charts/ProfitBrutChartPanel"
import NonCapturedChartPanel from "../charts/NonCapturedChartPanel"
import SellingPdfPanel from "../buttons/SellingPdfPanel"




export const PictureOnDashboardShimmer = () => {
    return (
        <div className=" flex flex-row space-x-4 mt-5 justify-center">
            <Skeleton circle={true} height={80} width={80} />
            <div className="flex flex-col  justify-center items-center mb-5">
                <Skeleton height={20} width={120}/>
            </div>
        </div>
    )
}

const PictureOnDashboard = (props) => {
    const { loading, error, data, } = props

    if (loading) return <PictureOnDashboardShimmer />;
    if (error) return null;

    return (
        <div className=" flex flex-row space-x-4 mt-5">
            <div className="h-20 w-20">
                <PhotoView photoUrl={data.usersExist.photoUrl} height={20} width={20}></PhotoView>
            </div>
            <div className="flex flex-col justify-center items-start mb-5">
                <div className="text-xl font-semibold">Bonjour, {data.usersExist.first_name} {data.usersExist.last_name}</div>
            </div>
        </div>
    )
}














const MainView = (props) => {

    const pastMonth = new Date();
    const [range, setRange] = useState({ from: pastMonth, to: addDays(pastMonth, 1) });
    const useDateRange = useMemo(() => ({range, setRange}), [range, setRange])

    return (
        <DateContext.Provider value={useDateRange}>
        <div className="flex flex-col">
            <div className="h-28 w-full bg-white border-t-1 border-black flex flex-row justify-between ">
                <PictureOnDashboard {...props}></PictureOnDashboard>
                <div className="flex flew-row justify-center space-x-6 items-center">
                    <div className="flex flex-row space-x-4">
                        <SellingPdfPanel></SellingPdfPanel>
                        <ReceiveMoneyButton token={props.token}></ReceiveMoneyButton>
                        <SendMoneyButton></SendMoneyButton>
                    </div>


                </div>
            </div>

            <div className="flex flex-row justify-between ">
                <div></div>
                <div className="flex flex-row space-x-4">
                    <FilterDaysListBox></FilterDaysListBox>
                    <EnterpriseDateRangeSelection></EnterpriseDateRangeSelection>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-10">
                <ProfitBrutChartPanel></ProfitBrutChartPanel>
                <ProfitNetChartPanel></ProfitNetChartPanel>
                <NonCapturedChartPanel></NonCapturedChartPanel>
            </div>



 

            {/* <PinCodeModal></PinCodeModal> */}

                

            <AllPaymentsList></AllPaymentsList>



        </div>

        </DateContext.Provider>

    )
}



export default MainView