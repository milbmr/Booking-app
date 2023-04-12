import NextAuth, { Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { userLogin } from "lib/server/auth";
import { presistUser } from "lib/server/users";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      async authorize(credentials: any) {
        if (!credentials) return null;

        const user = await userLogin(credentials);

        if (!user) return null;

        return user as any;
      },
      credentials: {},
    }),
  ],
  callbacks: {
    async jwt({ token, user, isNewUser, account }) {
      if (isNewUser && user && account) {
        const data = await presistUser(user, account);

        user = { ...user, ...data };
      }

      user && (token.user = user);
      return token;
    },

    async session({ session, token }) {
      let _session: Session | undefined;
      const user = token.user as User;

      if (user) {
        _session = { ...session, user: { id: user.id, email: user.email } };
      }

      return _session as Session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/" },
  debug: true,
});
