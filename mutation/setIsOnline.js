import gql from "graphql-tag";




export const SET_IS_ONLINE = gql`
mutation SetIsOnline($toggle: Boolean!) {
    setIsOnline(toggle: $toggle)
    }
`