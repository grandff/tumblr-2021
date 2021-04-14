import { gql } from "apollo-server";

// synchronize prisma
export default gql`
    type User {
        id : Int!        
        username : String!
        email : String!
        createdAt : String!
        updatedAt : String!
		blogUrl	: String!
		verifyYn : String!
    }
`