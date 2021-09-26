import gql from "graphql-tag";



export const UPDATE_PROFIL_PICTURE = gql`
    mutation UpdateProfilePicture($link: String!){
        updateProfilePicture(link: $link)
    }
`