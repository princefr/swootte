import gql from "graphql-tag";



export const GET_ACTIVITIES = gql`
query GetActivity{
            getActivity{
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