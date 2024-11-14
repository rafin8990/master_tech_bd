import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: "163271381504-8morf8sbm29r2bbsupkp6dnaajrh3rhh.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  pages: {
    signIn: `/login`,
  },
};

export default NextAuth(authOptions);
