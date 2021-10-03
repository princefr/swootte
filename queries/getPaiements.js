import gql from "graphql-tag";



export const GET_ALL_PAIEMENTS = gql`
query GetAllPaiements {
        getAllPaiements{
                _id
                createdAt
            }
        }

`