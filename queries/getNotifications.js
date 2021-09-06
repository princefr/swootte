import gql from "graphql-tag";



export const GET_NOTIFICATION = gql`
query LoadNotification($firebase_uid: String!) {
        loadNotification(firebase_uid: $firebase_uid){
            _id
            text
            type
            imgUrl
            isRead
            from {
                first_name
                last_name
                photoUrl
            }
            createdAt
            }
        }

`