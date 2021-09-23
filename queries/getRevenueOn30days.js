import gql from "graphql-tag";



export const GET_REVENUE_ON_30DAYS = gql`
query LoadRevenueOn30Days($token: String!) {
    loadRevenueOn30Days(token: $token)
        }

`