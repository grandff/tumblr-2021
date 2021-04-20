import client from "../../client";

export default {
	Query : {
		seeFollowing : async(_, {email, lastId}) => {
			// check user
			const ok = await client.user.findUnique({
				where : {email},
				select : {id : true}
			});
			
			if(!ok){
				return {
					ok : false,
					error : "User not foudn"
				}
			}
			
			const following = await client.user
				.findUnique({where : {email}})
				.following({
					take : 5,
					skip : lastId ? 1 : 0,
					...(lastId && {cursor : {id : lastId}}),
				});
			
			return {
				ok : true,
				following
			}
		}
	}
}