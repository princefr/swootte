import gql from "graphql-tag";




export const FREEZE_ACCOUNT = gql`
mutation MintTokens($firebase_uid: String!, $amount: Float!, $adress: String!, $token: String!) {
        mintTokens(firebase_uid: $firebase_uid, amount: $amount, adress: $adress, token: $token)
    }
`