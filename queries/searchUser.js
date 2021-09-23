import gql from "graphql-tag";

export const SEARCH_USER = gql`
query SearchUser($searchText: String!) {
    searchUser(searchText: $searchText){
        _id
        first_name
        last_name
        photoUrl
            }
        }
`