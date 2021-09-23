import gql from "graphql-tag";



export const UPDATE_PROFIL_PICTURE = gql`
    mutation UpdateProfilePicture($firebase_uid: String!, $link: String!){
        updateProfilePicture(firebase_uid: $firebase_uid, link: $link)
    }
`