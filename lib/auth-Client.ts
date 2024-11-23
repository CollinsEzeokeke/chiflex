import { createAuthClient } from "better-auth/react"
import { adminClient, usernameClient } from "better-auth/client/plugins"
import { emailOTPClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    baseUrl: process.env.NODE_ENV === 'production' 
    ? process.env.BETTER_AUTH_URL
    : 'https://localhost:3000/api/auth',
     secure: process.env.NODE_ENV === 'production',
    plugins: [ 
        usernameClient(), 
        emailOTPClient(),
        adminClient()
    ]  
})

export const { signIn, signUp, useSession } = createAuthClient()