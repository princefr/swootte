import gql from "graphql-tag";



export const GET_ALL_CONTACTS = gql`
query GetAllUserContact {
    getAllUserContact{
        _id
        contact {
            _id
            first_name
            last_name
            photoUrl
        }
        createdAt
    }
        }

`