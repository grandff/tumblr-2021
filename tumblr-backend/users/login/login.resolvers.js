import client from "../../client"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
	Mutation : {
		login : async(_, {
			email, password
		}) => {
			// 해당 유저 찾기
			const passwordOk = await bcrypt.hash(password, 10);
			const user = await client.user.findFirst({
				where : {
					AND : [
							{
								email
							},
							{
								password : passwordOk
							}
						]
					}
			});
			if(!user){
				return {
					ok : false,
					error : "Incorrect email/password"
				}
			};

			// 토큰 생성
			const token = await jwt.sign({id : user.id}, process.env.SECRET_KEY);
			return{
				ok : true,
				token
			}
		}
	}
}