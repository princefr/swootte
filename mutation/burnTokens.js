import gql from "graphql-tag";




export const BURN_TOKENS = gql`
mutation BurnTokens($amount: Float!, $address: String!, $token: String!) {
        burnCoins(amount: $amount, address: $address, token: $token)
    }
`