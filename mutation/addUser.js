import gql from "graphql-tag";




export const CREATE_USER = gql`
mutation CreateUser($user: UserInput!) {
    createUser(user: $user){
        user {
            _id
                email
                first_name
                last_name
                phonenumber
                country
                currency
                notificationPermission
                is_online
                createdAt
                photoUrl
                updatedAt
                adresses {title, location {latitude, longitude}, is_chosed}
        }
        customToken
            }
        }
`