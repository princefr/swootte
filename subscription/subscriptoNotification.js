import { gql } from "@apollo/client";




export const NOTIFICATION_SUBSCRIPTION = gql`
    subscription OnCommentAdded($listener: String!) {
        commentAdded(listener: $listener) {
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
