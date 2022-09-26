




import gql from "graphql-tag";




export const REMOVE_ENTERPRISE = gql`
mutation RemoveEnterprise($enterpriseId: String!, $pinCode: String!) {
    removeEnterprise(enterpriseId: $enterpriseId, pinCode: $pinCode){
            _id
            name
            type
            logoUrl
            publishableKey
            private_key
            walletPublicKey
            default_enterprise
            country
            description
            sellingPhysicalGoods
            selfShippingProduct
            shippingDelay
            transactionLibele
            abregedLibele
            phone
            email
            sector
            rccm
            website
            person {
                first_name
                last_name
                email
                address
                state
                city
                zip
            }
    }
    }
`