import gql from "graphql-tag";



export const GET_BALANCE = gql`
query LoadBalance($token: String!) {
    loadBalance(token: $token){
            amount
            isFrozen
            }
        }

`