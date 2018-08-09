import gql from 'graphql-tag'

export default gql`
    mutation createPlayer(
    $id: ID!
    $firstName: String!
    $lastName: String!
    $position: String!
    $maxBench: Int!
    $maxSquat: Int!
    $gradClass: String!

    ) {
        createPlayer(input: {
            id: $id, firstName: $firstName, lastName: $lastName, position: $position,
            maxBench: $maxBench, maxSquat: $maxSquat, gradClass: $gradClass
        }) {
            id
            firstName
            lastName
            position
            maxBench
            maxSquat
            gradClass
        }
    }
`