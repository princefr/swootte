import gql from "graphql-tag";




export const ADD_EXISTING_TOKEN = gql`
mutation AddExistingToken($token: CurrencyInput!) {
        addExistingToken(token: $token)
    }
`