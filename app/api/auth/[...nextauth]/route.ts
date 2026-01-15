import User from "@/database/model/user";
import { connectDB } from "@/database/mongodb";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt"

export const authOptions = {
  providers: [
    CredentialsProvider({
        name: "Credentials",

        credentials: {
            email: {},
            password: {}
        },
        
        async authorize(credentials, req) {
            await connectDB()
            const user = await User.findOne({ email: credentials?.email }) // unique email, as structured in model

            const passwordIsSame = await compare(credentials?.password || '', user.password)

            if (passwordIsSame){
                return {
                    id: user.userId,
                    email: user.email,
                    name: user.fullName?.split(" ")[0]
                }
            }
            return null
        }
    })
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }