import client from "../../client"
import {protectResolver} from "../users.utils";

export default {
	Mutation : {
		followUser : protectResolver(async(_, {email}, {loggedInUser}) => {
			
			
			const ok = await client.user.findUnique({where : {email}});
			if(!ok){
				return {
					ok : false,
					error : "Thats no user"
				}
			}
			
			const update = await client.user.update({
				where : {
					id : loggedInUser.id					
				},
				data : {
					following : {
						connect : {
							email
						}
					}
				}
			});			
			
			return {
				ok : true
			}
		})
	}
}