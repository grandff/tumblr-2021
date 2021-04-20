import client from "../../client"

export default {
	Query : {
		seeFollowers : async(_, {email, page}) => {
			const ok = await client.user.findUnique({
				where : {email},
				select : {id : true}
			});
			if(!ok){
				return {
					ok : false,
					error : "No user"
				}
			}
			
			const followers = await client.user
				.findUnique({where : {email}})
				.followers({
					take : 5,
					skip : (page - 1) * 5,
				});
			
			const totalFollwers = await client.user.count({where : {following : {some : {email}}}});
			
			return {
				ok : true,
				followers,
				totalPages : Math.ceil(totalFollwers / 5)
			}
		}
	}
}