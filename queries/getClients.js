import gql from "graphql-tag";



export const GET_CLIENTS = gql`
query LoadBalance($firebase_uid: String!, $token: String!) {
    loadBalance(firebase_uid: $firebase_uid, token: $token)
        }

`