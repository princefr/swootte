import gql from "graphql-tag";



export const GET_BALANCE = gql`
query LoadBalance($enterpriseId: String!){
        getEnterpriseBalance(enterpriseId: $enterpriseId)
    }

`


export const getBalance = async (client) => {
    return client.query({
        query: gql`
query LoadBalance{
    loadBalance{
            amount
            isFrozen
            address
            }
        }
        }
        `
    })
}