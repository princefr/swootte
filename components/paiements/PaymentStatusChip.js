


const PaymentStatusChip = ({ status }) => {

    switch (status) {
        case "FINALIZED":
          return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Terminé
            </span>
            
        case "ONGOING":
            return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
                En cours
            </span>
        case "REFUNDED":
            return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
                Refunded
            </span>
        case "IN_PROGRESS":
            return  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-600">
               En cours
            </span>
        case "CANCELLED":
            return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-600">
                Annulé
            </span>
        case "DONE":
            return  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-600">
                Terminé
            </span>
        case "FAILED":
            return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-600">
                Echoué
            </span>
        case "CANCELLED_USER":
            return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-600">
                Annulé
            </span>

        case "CANCELLED_AGENT":
            return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-600">
                Annulé par l'agent
            </span>
        case "REQUIRES_PAIEMENT":
            return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
               Paiement en attente
            </span>
        case "REQUIRES_CONFIRMATION":
            return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Non confirmé
            </span>
           

        case "REQUIRES_ACTION":
            return <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                Action necessaire
            </span>
           


    }
}


export default PaymentStatusChip