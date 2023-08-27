import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import { connectDb } from "@/utils/database";


const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks:{
    async session({ session }) {
        console.log("session");
      const sessionUser = await User.findOne({ email: session.user.email });

      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
        console.log(profile);
        try {
            console.log("conneting to mongo");
          await connectDb();
          console.log('CONNECTED TO MONGO');
          // check is user exist
          const Userexit = await User.findOne({ email: profile.email });
    
          // if not create a new user
    
          if (!Userexit) {
            await User.create({
              email: profile.email,
              username: profile.name.replace(" ", "").toLowerCase(),
              image: profile.picture,
            });
          }

          return true
        } catch (err) {
            console.log("Error checking if user exists: ", err.message);
          return false;
        }
      },
    },
  
});
export { handler as GET, handler as POST };
