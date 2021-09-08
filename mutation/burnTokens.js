import gql from "graphql-tag";




export const BURN_TOKENS = gql`
mutation MintTokens($firebase_uid: String!, $amount: Float!, $adress: String!, $token: String!) {
        mintTokens(firebase_uid: $firebase_uid, amount: $amount, adress: $adress, token: $token)
    }
`