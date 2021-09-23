import gql from "graphql-tag";



export const GET_CUSTOMERS_GAINED_ON_30DAYS = gql`
query LoadCustomersGainedOn30Days($token: String!) {
    loadCustomersGainedOn30Days(token: $token)
        }

`