import gql from "graphql-tag";




export const SUSCRIBE_TO_NEWS_LETTER = gql`
mutation SuscribeToNewsLetter($email: String!) {
    suscribeToNewsLetter(email: $email)
        }
`