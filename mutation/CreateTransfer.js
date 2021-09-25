import gql from "graphql-tag";




export const CREATE_TRANSFER = gql`
mutation CreateTransfer($address: String, $token: String!, $amount: Float!) {
    createTransfer(address: $address, token: $token, amount: $amount)
        }
`