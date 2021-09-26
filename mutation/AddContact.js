import gql from "graphql-tag";




export const ADD_CONTACT = gql`
mutation AddExistingToken($contact: String!) {
    createContact(contact: $contact)
    }
`