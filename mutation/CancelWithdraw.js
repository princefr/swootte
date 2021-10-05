import gql from "graphql-tag";




export const CANCEL_TRANSACTION_AGENT = gql`
mutation CancelTransactionAgent($transaction_id: String, $type: PaymentType!) {
        cancelTransactionAgent(transaction_id: $transaction_id, type: $type)
    }
`