import gql from "graphql-tag";



export const UPDATE_PUBLIC_INFORMATION = gql`
mutation UpdatePublicInformation($enterpriseId: String!, $name: String!, $libelle: String!, $libelleAbreged: String!, $email: String, $phone: String!) {
    updatePublicInformation(enterpriseId: $enterpriseId, name: $name, libelle: $libelle, libelleAbreged: $libelleAbreged, email: $email, phone: $phone) {
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