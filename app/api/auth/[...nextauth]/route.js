import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/db";

// Configuration options for authentication
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        // Credentials-based authentication
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;
                const user = await signInWithCredentials({ email, password });
                return user;
            },
        }),

        // Google OAuth provider
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        signIn: '/login',
        error: "/errors"
    },
    callbacks: {
        // Handling sign-in for both OAuth and credentials
        async signIn({ account, profile }) {
            if (account.type === "oauth") {
                return await signInWithOAuth({ account, profile });
            }
            return true;
        },

        // Handling session
        async session({ session, token }) {
            session.user = token.user;
            return session;
        },

        // Handling JSON Web Tokens (JWT)
        async jwt({ token }) {
            const user = await getUserByEmail({ email: token.email });
            token.user = user;
            return token;
        },
    }
}

// NextAuth handler
const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };


    
    
const signInWithOAuth = async ({ account, profile }) => {
    await connectToDatabase();

    // Check if the user already exists
    const user = await User.findOne({ email: profile.email });
    if (user) return true; // User already exists, sign in

    // Create a new user if not found
    const newUser = new User({
        name: profile.name,
        email: profile.email,
        image: profile.picture,
        provider: account.provider
    });

    await newUser.save();
    return true;
}

const getUserByEmail = async ({ email }) => {
    await connectToDatabase();

    // Query for the user by email, excluding the password field
    const user = await User.findOne({ email }).select("-password");
    if (!user) throw new Error('Email does not exist');

    return { ...user._doc, _id: user._id.toString() };
}

const signInWithCredentials = async ({ email, password }) => {
    await connectToDatabase();

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) throw new Error("Email does not exist");

    // Compare the hashed password
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) throw new Error('Password does not match');

    return { ...user._doc, _id: user._id.toString() };
}
