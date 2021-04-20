import client from "../../client"

export default {
	Query : {
		seeProfile : (_, {email}) => client.user.findUnique({
			where : {
				email
			},
			include : {
				following : true,
				followers : true
			}
		})
	}
}