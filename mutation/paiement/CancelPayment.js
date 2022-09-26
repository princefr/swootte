import gql from "graphql-tag";




export const CANCEL_PAYMENT = gql`
mutation CancelPayment($transactionId: String!, $enterpriseId: String! ,  $pinCode: String!) {
        cancelTransactionEnterprise(transactionId: $transactionId, enterpriseId: $enterpriseId, pinCode: $pinCode)
    }
`