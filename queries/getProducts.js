import gql from "graphql-tag";



export const GET_PRODUCTS = gql`
query GetProducts {
            getProducts{
                _id
                name
                description
                imgUrl
                isOpen
                createdAt
                updatedAt
            
            }
        }

`