
import gql from "graphql-tag";

export const loadUser = async (_client) => {
    return _client.query({
        query: gql`
        query GetIfUSerExist {
            usersExist{
                _id
                email
                first_name
                last_name
                phonenumber
                country
                currency
                defaultCurrency
                notificationPermission
                fee
                is_online
                createdAt
                photoUrl
                updatedAt
                adresses {title, location {latitude, longitude}, is_chosed}
                fcmToken
            }
        }
        `

    })
}


export const userInDatabase = async (uid, client) => {
    return client.query({
        query: gql`
        query IsExist($uid: String!) {
            userExist(uid: $uid)
        }
        `,
        variables: {
            'uid': uid
        }
        
        
    })
}


export const getDefaultToken = async (client) => {
    return client.query({
        query: gql`
        query GetIfUSerExist {
            usersExist{
                defaultCurrency
            }
        }
        `
    })
}


export const GET_USER = gql`
query GetIfUSerExist {
    usersExist{
            _id
            email
            first_name
            last_name
            phonenumber
            country
            defaultCurrency
            currency
            notificationPermission
            is_online
            createdAt
            photoUrl
            permissions
            updatedAt
            birth_date {day, month, year}
            adresses {title, location {latitude, longitude}, is_chosed}
            fcmToken
            }
        }
`