import { gql } from "apollo-server";

export default gql`
	type Mutation{
		unfollowUser(email : String!) : MutationResponse!
	}
`