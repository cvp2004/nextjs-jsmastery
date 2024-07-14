import { connectToDB } from "@utils/database";
import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from '@models/user'


const handler = nextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        const sessionuser = await User.findOne({
            email: session.user.email,
        });

        session.user.id = sessionUser._id.toString();

        return null;
    },
    async signIn({ profile }) {
        try {
            await connectToDB();

            const userExists = await User.findOne({
                email: profile.email,
            });

            if (!userExists) {
                await User.create({
                    email: profile.picture,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture,
                });
            }

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
})

export { handler as GET, handler as POST }