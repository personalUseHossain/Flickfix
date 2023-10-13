import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: "122647687706-5o4u39jtdpa2rreoa9mo7o9k92rtlqnv.apps.googleusercontent.com",
            clientSecret: "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"
        }),
        FacebookProvider({
            clientId: "849007810293198",
            clientSecret: "35e50832dc194ee7df398a9a154fffc3"
        })
    ]
});

export { handler as GET, handler as POST };