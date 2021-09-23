import gql from "graphql-tag";



export const GET_CURRENCIES = gql`
query GetCurrencies {
    getAllCurrencies {
            _id
            publicKey
            name
            symbol
            isDefault
            decimals
            mintAuthority
            freezeAuthority
            imgUrl
            createdAt
            }
        }

`