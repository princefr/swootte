import gql from "graphql-tag";



export const GET_ALL_PARTICIPATING_TRANSACTION = gql`
query GetAllParticipatingTransactions($token: String!) {
        getAllParticipatingTransactions(token: $token){
            __typename
            ...on Paiement {
                _id
                createdAt
            }    
            ...on TopUp {
                _id
                creator {
                    _id
                    first_name
                    last_name
                    photoUrl
                }
                amount
                agency
                status
                type
                validator {
                    _id
                    first_name
                    last_name
                    photoUrl
                }
                createdAt
                updatedAt
                }
            ...on Withdraw {
                _id
                creator {
                    _id
                    first_name
                    last_name
                    photoUrl
                }
                amount
                agency
                type
                status
                validator {
                    _id
                    first_name
                    last_name
                    photoUrl
                }
                createdAt
                updatedAt
            }
            }
        }

`