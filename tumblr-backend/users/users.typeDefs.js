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
		bio : String
		avatar : String
		following : [User]
		followers : [User]
		totalFollowing : Int!
		totalFollowers : Int!
		isFollowing : Boolean!
		isMe : Boolean!
    }
`