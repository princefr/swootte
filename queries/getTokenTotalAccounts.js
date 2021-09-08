import gql from "graphql-tag";



export const GET_TOKEN_TOTAL_ACCOUNTS = gql`
query LoadBalance($firebase_uid: String!, $token: String!) {
    loadBalance(firebase_uid: $firebase_uid, token: $token)
        }

`