import gql from "graphql-tag";



export const GET_CURRENCIES = gql`
query GetCurrencies($firebase_uid: String!) {
    getAllCurrencies(firebase_uid: $firebase_uid){
            _id
            publicKey
            name
            tick
            decimals
            mintAuthority
            freezeAuthority
            imgUrl
            createdAt
            }
        }

`