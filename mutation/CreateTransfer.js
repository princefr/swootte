import gql from "graphql-tag";




export const CREATE_TRANSFER = gql`
mutation CreateTransfer($publicKey: String, $token: String!, $amount: Float!) {
    createTransfer(publicKey: $publicKey, token: $token, amount: $amount)
        }
`