import gql from "graphql-tag";




export const CREATE_WITHDRAW = gql`
mutation CreateWithDraw($publicKey: String, $token: String!, $amount: Float!) {
        createWithDraw(publicKey: $publicKey, token: $token, amount: $amount)
    }
`