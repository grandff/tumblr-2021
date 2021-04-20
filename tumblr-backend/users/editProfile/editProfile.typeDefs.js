import { gql } from "apollo-server";

export default gql`
	type Mutation {
		editProfile(
			username : String
			email : String
			password : String
			bio : String
			avatar : Upload
			blogUrl : String			
		) : MutationResponse!
	}
`