// import Image from "next/image";
"use server";
import { auth } from "@/app/auth";
import { SignInButton } from "@/app/component/sign-in-button";
import Link from "next/link";
import { SignOutButton } from "./component/sign-out-button";

export default async function Home() {
  const session = await auth();
  console.log("Session:", session);
  if (session?.user) {
    return (
      <div>
        <Link href='/user-info'>User</Link>
        <SignOutButton />
      </div>
    );
  }
  return (
    <div>
      <div>
        <p>You are not signed in </p>
        <SignInButton />
      </div>
    </div>
  );
}

// <h1 className='text-3xl font-bold underline text-red-600'>
//   Welcome to DevFlow!
// </h1>
// <p className='mt-4 text-lg'>
//   This is a simple Next.js application demonstrating Tailwind CSS
//   integration.
// </p>
// <div className='mt-6'>
//   <Image
//     src='/images/nextjs-logo.png'
//     alt='Next.js Logo'
//     width={200}
//     height={200}
//   />
// </div>
// <p className='mt-4'>
//   Explore the code and customize it to fit your needs!
// </p>
