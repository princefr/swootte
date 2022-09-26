
import gql from "graphql-tag";



export const GET_PAYMENTS_BY_ID = gql`
query GetTransactionByIdUnauthed($id: String!) {
    getTransactionByIdUnauthed(id: $id){
            _id
            status
            type
            token
            description
            amount
            createdAt
            updatedAt
            creator {
                _id
                first_name
                last_name
                photoUrl  
            }
            
            }
        }
`


export const getPaymentById =(client, id) => {
    return client.query({
        query: GET_PAYMENTS_BY_ID,
        variables: {
            'id': id
        }
        
        
    })
}