import gql from "graphql-tag";


export const GET_PROFIT_NON_CAPTURED_CHART_DATA = gql`
    query GetProfilNonCarpturedChartData($enterpriseId: String!, $from: String!, $to: String!) {
        getProfilNonCarpturedChartData(enterpriseId: $enterpriseId, from: $from, to: $to){
            currentTotal
            formerTotal
            pourcentageDifference
            isPositive
            chart
        }

    }

`