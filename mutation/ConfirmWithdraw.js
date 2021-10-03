import gql from "graphql-tag";




export const CONFIRM_TRANSACTION_AGENT = gql`
mutation ConfirmTransactionAgent($transaction_id: String, $type: TransactionType, $token: String!) {
    confirmTransactionAgent(transaction_id: $transaction_id, type: $type, token: $token)
    }
`