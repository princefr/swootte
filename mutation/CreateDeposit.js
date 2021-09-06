import gql from "graphql-tag";




export const CREATE_DEPOSIT = gql`
mutation CreateDeposit($publicKey: String, $token: String!, $amount: Float!) {
    createDeposit(publicKey: $publicKey, token: $token, amount: $amount)
        }
`