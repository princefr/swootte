import gql from "graphql-tag";




export const REMOVE_CONTACT = gql`
mutation RemoveContact($contact_id: String!) {
        removeContact(contact_id: $contact_id)
    }
`