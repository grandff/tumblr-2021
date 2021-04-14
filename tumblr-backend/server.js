require("dotenv").config();                     // dotenv setting
import {ApolloServer} from "apollo-server-express";
import logger from "morgan";
import express from "express";
import {typeDefs, resolvers} from "./schema";
import { getUser, protectResolver } from "./users/users.utils";
import { graphql } from "graphql";

const apollo = new ApolloServer({
    resolvers, typeDefs,
    context : async ({req}) => {        
        return {
            loggedInUser : await getUser(req.headers.token),
            protectResolver,                                    // resolvers에 다 선언하는거보다 context에 function을 담아서 주는게 더 좋음
        }
    }
});

// set express server
const app = express();
app.use(logger("tiny"));                // set logger
app.use("/static", express.static("uploads"));     // set static folder. 이 폴더를 웹에 올린다고 생각하면 됨. url이 /static 으로 시작한다고 보면 됨
apollo.applyMiddleware({app});          // logger 다음줄에 applyMiddleware에 써야함




const PORT = process.env.PORT
app.listen({port : PORT}, () => {
    console.log(`Server is running on https://localhost:${PORT}/`)
});