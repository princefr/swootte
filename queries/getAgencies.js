import gql from "graphql-tag";



export const GET_AGENCIES = gql`
query GetAgencies {
    retrieveAllAgnecies{
            _id
            title
            address
            status
            createdAt
            }
        }

`