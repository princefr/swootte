import gql from "graphql-tag";



export const GET_TOTAL_SUPPLY = gql`
query LoadBalance($firebase_uid: String!, $token: String!) {
    loadBalance(firebase_uid: $firebase_uid, token: $token)
        }

`