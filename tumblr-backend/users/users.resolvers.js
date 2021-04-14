import client from "../client";

export default {
	User : {
		
	}
    /*User : {
        totalFollowing : ({id}) => client.user.count({where : {
            followers : {
                some : {
                    id
                }
            }
        }}),
        totalFollowers : ({id}) => client.user.count({where : {
            following : {
                some : {
                    id
                }
            }
        }}),
        isMe : ({id}, _, {loggedInUser}) => {      // context는 세번째 argument 이므로 꼭 두번째 변수가 들어가야함
            if(!loggedInUser){
                return false;
            }
            return id === loggedInUser.id;            
        },
        isFollowing : async ({id}, _, {loggedInUser}) => {
            if(!loggedInUser){
                return false;
            }
            const exists = client.user.count({where : {username : loggedInUser.username,
            following : {
                some : {
                    id
                }
            }}});
            return Boolean(exists);
        },
		photos : ({id}) => client.user.findUnique({where : {id}}).photos()
    }*/
}