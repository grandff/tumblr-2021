import client from "../../client";
import {protectResolver} from "../users.utils";

export default {
	Mutation : {
		unfollowUser : protectResolver(async(_, {email}, {loggedInUser}) => {
			// 해당 유저가 있는지 먼저 조회
			const ok = await client.user.findUnique({
				where : {email}
			});
			if(!ok){
				return {
					ok : false,
					error : "Can't find user"
				}
			}
			
			// unfollow 처리
			await client.user.update({
				where : {
					id : loggedInUser.id
				},
				data : {
					following : {
						disconnect : {
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
