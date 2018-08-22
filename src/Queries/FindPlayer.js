import graphql from 'graphql-tag'

export default graphql`
    query getPlayer ($id: ID!){
        getPlayer(id: $id) {
            firstName
            lastName
            position
            gradClass
            maxBench
            maxSquat
        }
    }
`