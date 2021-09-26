import gql from "graphql-tag";




export const REMOVE_PRODUCT = gql`
mutation RemoveProduct($product_id: String!) {
        removeProduct(product_id: $product_id)
    }
`