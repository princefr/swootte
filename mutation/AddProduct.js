import gql from "graphql-tag";




export const ADD_PRODUCT = gql`
mutation AddProduct($product: ProductInput!) {
    createProduct(product: $product)
        }
`