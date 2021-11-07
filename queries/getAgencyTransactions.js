import gql from "graphql-tag";



export const GET_AGENCY_TRANSACTIONS = gql`
query GetAgenciesTransactions {
    retrieveAllAgenciesTransactions{
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
                agency {
                  _id
                }
                destination
                transactionId
                createdAt
                updatedAt
                shortId
            }
        }

`