import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import api from "src/utils/axios";

export default NextAuth({
    providers:[
        Credentials({
            async authorize({email, password}) {
                try {
                    const {data} = await api.post('/login', {email, password});
                    return data;
                } catch (error) {
                    throw new Error(error.response.data.msg);
                }
            }           
        })
    ],
    pages: {
        error: '/login'
    }, 
    session: {
        strategy: "jwt"

    },
    secret: process.env.JWT_SECRET,
    callbacks: {
        async jwt({token, user}) {
            if(user){
                token.user = user.user;
                token.token = user.token;
            }
            return token;
        },
        async session({session, token, user}) {
            if(token){
                session.user = token.user;
                session.token = token.token;
            }
            return session;
        } 
    },
    debug: true
})