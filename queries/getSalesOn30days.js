import gql from "graphql-tag";



export const GET_SALES_ON_30DAYS = gql`
query LoadSalesOn30Days($token: String!) {
    loadSalesOn30Days(token: $token)
        }

`