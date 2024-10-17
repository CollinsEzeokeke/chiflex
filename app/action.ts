// // app/auth/signin/actions.ts
// 'use server'

// import { signIn } from "next-auth/react"

// export async function signInWithCredentials(email: string, password: string) {
//   try {
//     const result = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//     })
// console.log("this is hte result from the credentials")
//     if (result?.error) {
//       return { success: false, error: result.error }
//     }

//     if (result?.ok) {
//       return { success: true }
//     }

//     return { success: false, error: "An unexpected error occurred" }
//   } catch (error) {
//     console.error("Sign-in error:", error)
//     return { success: false, error: "An unexpected error occurred" }
//   }
// }

// export async function signInWithGoogle() {
//   try {
//     console.log("i don land for the signin ")
//     await signIn("google", { 
//       callbackUrl: '/dashboard'
//     })
//     console.log("i have finished running the signin google")

//     return { success: true }
//   } catch (error) {
//     console.error("Google sign-in error:", error)
//     return { success: false, error: "Failed to sign in with Google" }
//   }
// }



"use server"

import { signIn } from "@/lib/auth"

export const googleSignin = async  ()=>{
    await signIn("google")

}
