
import gql from "graphql-tag";
import Helper, { useClient } from "../components/auth/auth";


export const loadUser = async (token) => {
    const client = Helper.useClient(token)
    return client.query({
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


export const getDefaultToken = async (token) => {
    const client = Helper.useClient(token)
    return client.query({
        query: gql`
        query GetIfUSerExist {
            usersExist{
                defaultWallet
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
        currency
        notificationPermission
        is_online
        createdAt
        photoUrl
        permissions
        updatedAt
        adresses {title, location {latitude, longitude}, is_chosed}
        fcmToken
            }
        }
`