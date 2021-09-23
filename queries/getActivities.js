import gql from "graphql-tag";



export const GET_ACTIVITIES = gql`
query LoadBalance($token: String!) {
    loadBalance(token: $token)
        }

`