import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import { AuthOptions } from 'next-auth'
import prismaClient from "./prisma";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismaClient),
    providers: [ // https://next-auth.js.org/providers/google
            Google({
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
            }),
        ],
    callbacks: {
        async session({ session, token, user, }) {
            session.user = { ...session.user, id: user.id } as {
                id: string;
                email: string;
                name: string;
            }
            return session;
        }
    }
}