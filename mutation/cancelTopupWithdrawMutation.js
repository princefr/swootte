import gql from "graphql-tag";




export const CANCEL_TRANSACTION_USER = gql`
mutation CancelTransactionUser($transaction_id: String, $type: PaymentType!) {
        cancelTransactionUser(transaction_id: $transaction_id, type: $type)
    }
`