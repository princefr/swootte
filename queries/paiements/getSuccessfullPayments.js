import gql from "graphql-tag";



export const GET_ALL_SUCCESFULL_PAIEMENT = gql`
query GetSuccessFullTransactionByEnterpriseId($enterpriseId: String!, $from: String!, $to: String!, $skip: Float!, $limit: Float!){
    getSuccessFullTransactionByEnterpriseId(enterpriseId: $enterpriseId, from: $from, to: $to, skip: $skip, limit: $limit){
        transactions {
            _id
            status
            type
            token
            description
            amount
            createdAt
            updatedAt
            feeEnterprise
            creator {
                _id
                first_name
                last_name
                photoUrl  
            }
         }
         pageTotal
            }
        }

`