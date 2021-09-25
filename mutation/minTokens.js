import gql from "graphql-tag";




export const MINT_TOKENS = gql`
mutation MintTokens($amount: Float!, $address: String!, $token: String!) {
        mintCoin(amount: $amount, address: $address, token: $token)
    }
`