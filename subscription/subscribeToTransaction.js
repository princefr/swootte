import { gql } from "@apollo/client";




export const TRANSACTION_SUBSCRIPTION_BY_ID = gql`
    subscription TransactionPayed($id: String!) {
        transactionPayed(id: $id) {
            _id
            status
        }
    }
`
