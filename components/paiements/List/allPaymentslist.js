import { useLazyQuery} from "@apollo/client"
import { Transition } from "@headlessui/react"
import { format, startOfDay } from "date-fns"
import { useContext, useEffect, useState } from "react"
import { DateContext } from "../../../context/DateContext"
import { EnterpriseContext } from "../../../context/EnterpriseContext"
import { GET_ALL_PAYMENTS } from "../../../queries/paiements/getAllPayments"
import EmptyPanel from "../../empty/EmptyPanel"
import ErrorPanel from "../../error/ErrorPanel"
import TransactionPagination from "../../Pagination/transactionPagination"
import PaiementItemDropDown from "../dropdowns/PaiementItemDropDown"
import PaymentStatusChip from "../PaymentStatusChip"
import LoadingList from "./loadings/LoadingList"
import PaymentItem from "./PaymentItem"
import PaymentItemsHead from "./PaymentItemsHead"





const AllPaymentsList = () => {
    const {range, _} = useContext(DateContext)
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)
    const [GetAllPaiement, {loading, error, data, refetch}] = useLazyQuery(GET_ALL_PAYMENTS)
    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(5)

    useEffect(() => {
        if(!enterpriseId.length) return;
        GetAllPaiement({
            variables: {enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id, from: startOfDay(range.from), to: range.to, skip: skip, limit: limit}
        })
    }, [enterpriseId])
    
    useEffect(() => {
        if(!enterpriseId.length) return;
        GetAllPaiement({
            variables: {enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id, from: startOfDay(range.from), to: range.to, skip: skip, limit: limit}
        })
    }, [range])


    const forward = (event) => {
        event.preventDefault();
        if(skip < (data.getAllTransactionByEnterpriseId.pageTotal - 1)) {
            setSkip(skip + 1)
        }
    }

    const backward = (event) => {
        event.preventDefault()
        if(skip > 0) {
            setSkip(skip - 1)
        }
    }

    const onButtonClicked = (event, index) => {
        event.preventDefault()
        if((skip + 1) == index) return;
        if(index -1 > 0) return setSkip(index -1)
        if(index -1 == 0) return setSkip(0)
    }

    useEffect(() => {
        if(!enterpriseId) return;
        if(!enterpriseId.length) return;
        GetAllPaiement({
            variables: {enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id, from: startOfDay(range.from), to: range.to, skip: skip, limit: limit}
        })
    }, [skip])

    if(loading) return <LoadingList></LoadingList>
    if(error) return <ErrorPanel title={"Une erreur s'est produite"} description={error.message}/>
    if(!data) return <EmptyPanel title={"Aucune transaction"} description={"Vous n'avez pour l'heure recu aucun paiement ou transaction"}/>
    if(!data.getAllTransactionByEnterpriseId.transactions.length) return <EmptyPanel title={"Aucune transaction"} description={"Vous n'avez pour l'heure recu aucun paiement ou transaction"}/>



    return (
        <Transition show={data.getAllTransactionByEnterpriseId.transactions.length > 0}>
        <div className="flex flex-col py-8">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <PaymentItemsHead/>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {
                                    data.getAllTransactionByEnterpriseId.transactions.map((paiement, index) => {
                                        return <PaymentItem paiement={paiement} index={index} key={index}/>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <TransactionPagination onButtonClicked={onButtonClicked} data={data.getAllTransactionByEnterpriseId} currentPage={skip} forward={forward} backward={backward}></TransactionPagination>
        </div>
    </Transition>
    )
}




export default AllPaymentsList