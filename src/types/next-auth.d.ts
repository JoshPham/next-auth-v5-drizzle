import NextAuth, { type DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      firstName: string,
      lastName: string,
    } & DefaultSession["user"]
  }
}

export const { auth, handlers } = NextAuth({
  callbacks: {
    session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          firstName: user.firstName, // Assuming user.firstName is available
          lastName: user.lastName,   // Assuming user.lastName is available
        },
      };
    },
  },
});
