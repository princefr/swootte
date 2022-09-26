import { format } from "date-fns"
import PaiementItemDropDown from "../dropdowns/PaiementItemDropDown"
import PaymentStatusChip from "../PaymentStatusChip"



const PaymentItem = ({ paiement, index }) => {
    return <tr key={index}>
        <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center text-sm">
                {paiement._id}
            </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
            {paiement.amount}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
            {paiement.feeEnterprise}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm">
            {paiement.description}
        </td>
        <td className="px-6 py-4 whitespace-nowrap  text-gray-500 text-sm">
            { paiement.creator._id != null ?
            <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
                <img className="h-10 w-10 rounded-full" src={paiement.creator.photoUrl} alt="transaction client picture" />
            </div>
            <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                   {paiement.creator.first_name + " " +  paiement.creator.last_name} 
                </div>
                {/* <div className="text-sm text-gray-500">
                    jane.cooper@example.com
                </div> */}
            </div>
        </div> : null
            }

        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            <PaymentStatusChip status={paiement.status}></PaymentStatusChip>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {format(new Date(paiement.createdAt), "dd/MM/yyyy '-' hh:mm")}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <PaiementItemDropDown transaction={paiement}></PaiementItemDropDown>
        </td>
    </tr>
}

export default PaymentItem