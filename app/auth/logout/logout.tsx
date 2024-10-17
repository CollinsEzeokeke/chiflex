/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8UD4u29880U
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-[80%] max-w-md p-6 space-y-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-center">
          You have been logged out of Chiflex
        </h2>
        <p className="text-base text-center">
          Keep the magic alive here in the app
        </p>
        <Link
          href="#"
          className="inline-flex items-center justify-center w-full h-10 px-6 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          prefetch={false}
        >
          Go to Login Page
        </Link>
      </div>
    </div>
  );
}
