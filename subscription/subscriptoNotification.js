import { gql } from "@apollo/client";




export const NOTIFICATION_SUBSCRIPTION = gql`
    subscription NotificationAdded($listener: String!) {
        notificationAdded(listener: $listener) {
            _id
        }
    }
`
