import gql from "graphql-tag";



export const GET_TOTAL_SUPPLY = gql`
query LoadTokenSupply($token: String!) {
    loadTokenSupply(token: $token)
        }

`