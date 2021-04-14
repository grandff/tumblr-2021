  
import jwt from "jsonwebtoken"
import client from "../client"

export const getUser = async(token) => {
    try{
        // 로그인을 하는 경우 등 토큰이 없을 때 체크
        if(!token){
            return null;
        }
        const {id} = await jwt.verify(token, process.env.SECRET_KEY)      // token verify and open object
        const user = await client.user.findUnique({where : {id}});
        if(user){
            return user
        }else{
            return null;
        }    
    }catch(e){
        return e;
    }    
};

export const protectResolver = (ourResolver) => (root, args, context, info) => {
    if(!context.loggedInUser){
        return {
            ok : false,
            error : "Pleease log in to perform this action."
        }
    }

    return ourResolver(root, args, context, info);
}