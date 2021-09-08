import gql from "graphql-tag";



export const GET_CUSTOMERS_GAINED_ON_30DAYS = gql`
query LoadCustomersGainedOn30Days($firebase_uid: String!, $token: String!) {
    loadCustomersGainedOn30Days(firebase_uid: $firebase_uid, token: $token)
        }

`