import gql from "graphql-tag";
import client from "../utils/graphql";


export const loadUser = async (firebase_uid) => {
    return client.query({
        query: gql`
        query GetIfUSerExist($firebase_uid: String!) {
            usersExist(firebase_uid: $firebase_uid){
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
        `,
        variables: {
            firebase_uid: firebase_uid
        }

    })
}


export const GET_USER = gql`
query GetIfUSerExist($firebase_uid: String!) {
    usersExist(firebase_uid: $firebase_uid){
        _id
        email
        first_name
        last_name
        is_seller
        phonenumber
        country
        currency
        notificationPermission
        is_online


        createdAt
        photoUrl
        updatedAt
        adresses {title, location {latitude, longitude}, is_chosed}
        fcmToken
            }
        }
`