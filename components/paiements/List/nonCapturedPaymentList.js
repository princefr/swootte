import { useLazyQuery} from "@apollo/client"
import { Transition } from "@headlessui/react"
import { useContext, useEffect, useState } from "react"
import { DateContext } from "../../../context/DateContext"
import { EnterpriseContext } from "../../../context/EnterpriseContext"
import { GET_ALL_NON_CAPTURED_PAYMENTS } from "../../../queries/paiements/getNonCapturedPayments"
import LoadingList from "./loadings/LoadingList"
import { startOfDay } from "date-fns"
import EmptyPanel from "../../empty/EmptyPanel"
import ErrorPanel from "../../error/ErrorPanel"
import PaymentItem from "./PaymentItem"
import PaymentItemsHead from "./PaymentItemsHead"


const NonCapturedPaymentsList = () => {
    const {range, _} = useContext(DateContext)
    const [GetNonCapturedPayments, { loading, error, data, refetch }] = useLazyQuery(GET_ALL_NON_CAPTURED_PAYMENTS)
    const {enterpriseId, setEnterpriseId} = useContext(EnterpriseContext)
    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(5)

    useEffect(() => {
        if(!enterpriseId) return;
        if(!enterpriseId.length) return;
        GetNonCapturedPayments({
            variables: {enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id, from: startOfDay(range.from), to: range.to, skip: skip, limit: limit}
        })
    }, [enterpriseId])
    
    useEffect(() => {
        if(!enterpriseId) return;
        if(!enterpriseId.length) return;
        GetNonCapturedPayments({
            variables: {enterpriseId: enterpriseId.filter((company) => company.default_enterprise)[0]._id, from: startOfDay(range.from), to: range.to, skip: skip, limit: limit}
        })
    }, [range])

    if(loading) return <LoadingList></LoadingList>
    if(error) return <ErrorPanel title={"Une erreur s'est produite"} description={error.message}/>
    if(!data) return <EmptyPanel title={"Aucune transaction"} description={"Vous n'avez pour l'heure recu aucun paiement ou transaction"}/>
    if(!data.getNonCapturedTransactionByEnterpriseId.length) return <EmptyPanel title={"Aucune transaction"} description={"Vous n'avez pour l'heure recu aucun paiement ou transaction"}/>

    return (
        <Transition show={data.getNonCapturedTransactionByEnterpriseId.length > 0}>
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
                                    data.getNonCapturedTransactionByEnterpriseId.map((paiement, key) => {
                                        return <PaymentItem paiement={paiement} index={key} key={key}/>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
    )
}




export default NonCapturedPaymentsList