import gql from "graphql-tag";

export const SEARCH_USER = gql`
query SearchUser($searchText: String!) {
    searchUser(searchText: $searchText){
        __typename
        ... on UserSmall {
            _id
        first_name
        last_name
        photoUrl
        }
            }
        }
`