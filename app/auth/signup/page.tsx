// better auth implementation

"use client"
import { authClient } from "@/lib/auth-Client"; //import the auth client
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRouter } from "next/navigation";
import { useState } from 'react';
 
export default function SignUp() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [name, setName] = useState('');
  const [ isLoading, setIsLoading ] = useState(false)
  const router = useRouter()

  const signUp = async () => {
    const { data, error } = await authClient.signUp.email({ 
        email: 'collinsmecosy@gmail.com', 
        password: 'techycolliupdate@gmail.com', 
        name: 'something doing', 
        image: 'https://example.com', 
        username: 'williams'
     }, { 
        onRequest: (ctx) => { 
          setIsLoading(true)
        }, 
        onSuccess: (ctx) => { 
          router.push('/dashboard')
        }, 
        onError: (ctx) => { 
          setIsLoading(false)
          console.log(ctx.error.message)
        }, 
      }); 
      console.log(data)
      console.log(error)
  };
 
  return (
    <div>
      {isLoading && <LoadingSpinner message='Creating User' />}
      {/* <input type="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> */}
      {/* <input type="file" onChange={(e) => setImage(e.target.files?.[0])} /> */}
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}

















// "use client";

// import { useState, ChangeEvent, FormEvent } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { AlertCircle } from "lucide-react";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import HomeLink from "@/components/homeLink";
// import LoadingSpinner from "@/components/LoadingSpinner";
// import { useToast } from "@/hooks/use-toast";
// import { ToastAction } from "@radix-ui/react-toast";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { FaGoogle } from "react-icons/fa6";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   name?: string;
//   username: string;
// }

// interface FormErrors {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   password?: string;
//   submit?: string;
//   username?: string;
// }

// export default function SignUp() {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState<FormData>({
//     firstName: "",
//     lastName: "",
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter()

//   const validateField = (name: string, value: string): string | undefined => {
//     switch (name) {
//       case 'firstName':
//         return value.trim() === '' ? 'First name is required' : undefined;
//       case 'lastName':
//         return value.trim() === '' ? 'Last name is required' : undefined;
//       case 'email':
//         if (value.trim() === '') return 'Email is required';
//         return !/\S+@\S+\.\S+/.test(value) ? 'Email is invalid' : undefined;
//       case 'password':
//         if (value.trim() === '') return 'Password is required';
//         return value.length < 6 ? 'Password must be at least 6 characters' : undefined;
//       default:
//         return undefined;
//     }
//   };

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     // Update form data
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));

//     // Real-time validation
//     const fieldError = validateField(name, value);
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: fieldError,
//     }));
//   };

//   const validateForm = (): FormErrors => {
//     const newErrors: FormErrors = {};

//     // Validate all fields using the validateField function
//     Object.entries(formData).forEach(([key, value]) => {
//       const error = validateField(key, value);
//       if (error) {
//         newErrors[key as keyof FormErrors] = error;
//       }
//     });

//     return newErrors;
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//       return;
//     }
//     setIsLoading(true);
//     try {
//       const submissionData = {
//         ...formData,
//         name: `${formData.firstName} ${formData.lastName}`.trim()
//       };
//       const { firstName, lastName, ...dataToSubmit } = submissionData;
//       const response = await fetch('/api/auth/signUp', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataToSubmit)
//       });
//       const data = await response.json();

//       if (!response.ok) {
//         switch (response.status) {
//           case 409:
//             toast({
//               title: "Creation of New user Failed",
//               description: "User already exists go to login",
//               action: (
//                 <ToastAction altText="Go to Login">
//                   <Link href="./login">Login Page</Link>
//                 </ToastAction>
//               )
//             });
//             break;
//           case 400:
//             toast({
//               title: "Invalid Input",
//               description: data.message || 'Please check your input and try again.'
//             });
//             break;
//           case 500:
//             toast({
//               title: "Server Error",
//               description: "Reload the page and try again"
//             });
//             break;
//           default:
//             throw new Error(data.message || 'Something went wrong');
//         }
//       } else {
//         toast({
//           title: "Account created successfully",
//           description: "Redirecting to dashboard..."
//         });
//         // redirects to dashboard
//         router.push('/dashboard/basic-user');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrors(prev => ({
//         ...prev,
//         submit: error instanceof Error ? error.message : 'Something went wrong'
//       }));
//     } finally {
//       setIsLoading(false);
//     }
//   };


//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
//       {isLoading && <LoadingSpinner message='Creating User' />}
//       <HomeLink className="absolute top-[-0.130rem] p-6 flex justify-start items-center w-screen h-10" />
//       <Card className="w-full max-w-md shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] dark:shadow-[0_20px_50px_rgba(255,_255,_255,_0.2)] transition-shadow duration-300">
//         <CardHeader>
//           <CardTitle>Sign Up</CardTitle>
//           <CardDescription>Create your account to get started.</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="firstName">First name</Label>
//                 <Input
//                   id="firstName"
//                   name="firstName"
//                   placeholder="John"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//                 {errors.firstName && (
//                   <Alert variant="destructive">
//                     <AlertCircle className="h-4 w-4" />
//                     <AlertDescription>{errors.firstName}</AlertDescription>
//                   </Alert>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="lastName">Last name</Label>
//                 <Input
//                   id="lastName"
//                   name="lastName"
//                   placeholder="Doe"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//                 {errors.lastName && (
//                   <Alert variant="destructive">
//                     <AlertCircle className="h-4 w-4" />
//                     <AlertDescription>{errors.lastName}</AlertDescription>
//                   </Alert>
//                 )}
//               </div>
//             </div>
//             {/* New Username Field */}
//             <div className="space-y-2">
//               <Label htmlFor="username">Username</Label>
//               <Input
//                 id="username"
//                 name="username"
//                 placeholder="johndoe123"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//               {errors.username && (
//                 <Alert variant="destructive">
//                   <AlertCircle className="h-4 w-4" />
//                   <AlertDescription>{errors.username}</AlertDescription>
//                 </Alert>
//               )}
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="john.doe@example.com"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && (
//                 <Alert variant="destructive">
//                   <AlertCircle className="h-4 w-4" />
//                   <AlertDescription>{errors.email}</AlertDescription>
//                 </Alert>
//               )}
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errors.password && (
//                 <Alert variant="destructive">
//                   <AlertCircle className="h-4 w-4" />
//                   <AlertDescription>{errors.password}</AlertDescription>
//                 </Alert>
//               )}
//             </div>
//             <Button type="submit" className="w-full">
//               Sign Up
//             </Button>

//             {/* Divider */}
//             <div className="relative my-4">
//               <div className="absolute inset-0 flex items-center">
//                 <span className="w-full border-t" />
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-background px-2 text-muted-foreground">
//                   Or continue with
//                 </span>
//               </div>
//             </div>

//             {/* Google Sign-in Button */}
//             <motion.a
//               href="/api/auth/callback/google"
//               className="w-full flex items-center justify-center gap-2 p-2 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <FaGoogle className="w-5 h-5" />
//               <span>Sign in with Google</span>
//             </motion.a>
//           </form>
//         </CardContent>
//         <CardFooter className="flex justify-center">
//           <p className="text-sm text-muted-foreground">
//             Already have an account?{" "}
//             <a href="/auth/login" className="text-primary hover:underline">
//               Log in
//             </a>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
