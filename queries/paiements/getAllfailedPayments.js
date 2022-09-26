import gql from "graphql-tag";



export const GET_ALL_FAILED_PAYMENTS = gql`
query GetFailedTransactionByEnterpriseId($enterpriseId: String!, $from: String!, $to: String!, $skip: Float!, $limit: Float!){
    getFailedTransactionByEnterpriseId(enterpriseId: $enterpriseId, from: $from, to: $to, , skip: $skip, limit: $limit){
        transactions {
            _id
            status
            type
            token
            description
            amount
            feeEnterprise
            createdAt
            updatedAt
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