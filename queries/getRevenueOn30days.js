import gql from "graphql-tag";



export const GET_REVENUE_ON_30DAYS = gql`
query LoadRevenueOn30Days($firebase_uid: String!, $token: String!) {
    loadRevenueOn30Days(firebase_uid: $firebase_uid, token: $token)
        }

`