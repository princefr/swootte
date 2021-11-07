import gql from "graphql-tag";



export const GET_ALL_PARTICIPATING_TRANSACTION = gql`
query GetAllParticipatingTransactions {
        getAllParticipatingTransactions{
                _id
                status
                type
                creator{
                  _id
                  first_name
                  last_name
                  photoUrl
                }
                amount
                agency
                destination
                transactionId
                createdAt
                updatedAt
                shortId
            }
        }

`