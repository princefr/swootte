import gql from "graphql-tag";



export const GET_AGENCY_TRANSACTIONS = gql`
query GetAgenciesTransactions {
    retrieveAllAgenciesTransactions{
            __typename
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
                shortId
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
                shortId
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