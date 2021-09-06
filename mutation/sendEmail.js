import gql from "graphql-tag";




export const SEND_EMAIL = gql`
mutation SendEmail($email: EmailInput!) {
    sendEmail(email: $email)
        }
`