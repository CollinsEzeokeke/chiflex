import { authClient } from "@/lib/auth-Client"

const signIn = async () => {
    const data = await authClient.signIn.social({
        provider: "google"
    })
}