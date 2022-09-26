




import gql from "graphql-tag";




export const CHANGE_CURRENT_ENTERPRISE = gql`
mutation ChangeDefaultEnterprise($enterpriseId: String!) {
    changeDefaultEnterprise(enterpriseId: $enterpriseId){
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