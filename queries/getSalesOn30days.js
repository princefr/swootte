import gql from "graphql-tag";



export const GET_SALES_ON_30DAYS = gql`
query LoadSalesOn30Days($firebase_uid: String!, $token: String!) {
    loadSalesOn30Days(firebase_uid: $firebase_uid, token: $token)
        }

`