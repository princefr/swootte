import gql from "graphql-tag";




export const UPDATE_DEFAULT_CURRENCY = gql`
mutation SetDefaultCurrency($currency_id: String!) {
    setDefaultCurrency(currency_id: $currency_id)
    }
`