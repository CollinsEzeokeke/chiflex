"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { Loader2, Key } from "lucide-react";
import { authClient, signIn } from "@/lib/auth-Client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRouter, useSearchParams } from "next/navigation";

export function SignInContent() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlMessage = searchParams.get('message')

  useEffect(() => {
    if (urlMessage) {
      const decodeMessage = decodeURIComponent(urlMessage)
      toast({
        title: 'Redirect Message',
        description: decodeMessage
      })
    }
  }, [urlMessage, toast])
  const SignInHandler = async () => {
    setLoading(true)
    try {
      await authClient.signIn.email({
        email: email,
        password: password,
        callbackURL: '/dashboard'
      }, {
        onRequest: () => {
          setLoading(true)
        },
        onSuccess: async () => {
          const session = await authClient.getSession()
          if (session) {
            router.push('/dashboard')
          }
        },
        onError: (ctx) => {
          if (ctx.error.status === 500) {
            toast({
              title: "Trouble Sigining in?",
              description: "Check your Internet and try again"
            })
          }
          if (ctx.error.status === 403) {
            router.push('/verify-email')
          }
          toast({
            title: 'Error',
            description: ctx.error.message
          })
        }
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">Sign In</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>

              <Input
                id="password"
                type="password"
                placeholder="password"
                autoComplete="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                onClick={() => {
                  setRememberMe(!rememberMe);
                }}
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>



            <Button
              type="submit"
              className="w-full"
              disabled={loading}
              onClick={SignInHandler}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Login"
              )}
            </Button>

            <Button
              variant="secondary"
              className="gap-2"
              onClick={async () => {
                await signIn.passkey();
              }}
            >
              <Key size={16} />
              Sign-in with Passkey
            </Button>

            <div className={cn(
              "w-full gap-2 flex items-center",
              "justify-between flex-col"
            )}>
              <Button
                variant="outline"
                className={cn(
                  "w-full gap-2"
                )}
                onClick={async () => {
                  await signIn.social({
                    provider: "google",
                    callbackURL: "/dashboard"
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05c0 5.71-3.83 9.77-9.6 9.77c-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48c-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51z"
                  ></path>
                </svg>
                Sign in with Google
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <div className="flex items-center justify-center w-full">
            <p className="text-sm text-neutral-500">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="text-primary underline">
                Sign up
              </Link>
            </p>
          </div>
          <div className="flex justify-center w-full border-t py-4">
            <p className="text-center text-xs text-neutral-500">
              Made with 💓 by{" "}
              <Link
                href="https://x.com/FattrickCollins"
                className="underline"
                target="_blank"
              >
                <span className="dark:text-orange-200/90">Fat-end Developer</span>
              </Link>
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
