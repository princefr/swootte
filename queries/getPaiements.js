import gql from "graphql-tag";



export const GET_ALL_PAIEMENTS = gql`
query GetAllPaiements {
        getAllPaiements{
                _id
                status
                type
                creator {
                  _id
                }
                amount
                walletFrom
                walletTo
                transactionId
                createdAt
                updatedAt
                shortId
            }
        }

`