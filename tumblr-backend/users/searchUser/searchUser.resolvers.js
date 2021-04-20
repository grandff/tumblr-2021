import client from "../../client"

export default {
	Query : {
		searchUser : async(_, {keyword, page}) => {
			const users = await client.user.findMany({
				where : {
					username : {
						startsWith : keyword.toLowerCase()
					}
				},
				take : 10,
				skip : (page - 1) * 10
			});
			
			return users;			
		},
	}
}