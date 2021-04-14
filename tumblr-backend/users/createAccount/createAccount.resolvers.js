import client from "../../client"
import bcrypt from "bcrypt";

export default {
	Mutation : {
		createAccount : async(_, {
			username,
			email,
			password,
			blogUrl
		}) => {
			try{
				// 해당 유저가 존재하는지 체크
				const existUser = await client.user.findFirst({
					where : {
						OR : [
							{
								username
							},
							{
								email
							}
						]
					}
				});
				
				if(existUser){
					throw new Error("username/email is already exist");
				}
				
				// 패스워드 암호화
				const uglyPassword = await bcrypt.hash(password, 10);
				
				// db insert
				await client.user.create({
					data : {
						username, email, blogUrl, password : uglyPassword
					}
				});
				
				return{
					ok : true
				}
			}catch(e){
				return{
					ok : false,
					error : `Can't create ${e}`
				}
			}
		}
	}
}