import gql from "graphql-tag";



export const GET_NOTIFICATION = gql`
query LoadNotification{
        loadNotification{
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