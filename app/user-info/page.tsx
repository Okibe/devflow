import Image from "next/image";
import { auth } from "@/app/auth";

export default async function UserInfo() {
  const session = await auth();
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-red-600'>
        Welcome to DevFlow,
      </h1>
      <p> User signin with name:{session?.user?.name}! </p>
      <p> User signin with Email:{session?.user?.email}! </p>
      <p className='mt-4 text-lg'>
        This is a simple Next.js application demonstrating Tailwind CSS
        integration.
      </p>
      <div className='mt-6'>
        {session?.user?.image && (
          <Image
            src={session?.user?.image || "/images/nextjs-logo.png"}
            alt={session?.user?.name ?? "Avatar"}
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
          />
        )}
      </div>
      <p className='mt-4'>
        Explore the code and customize it to fit your needs!
      </p>
    </div>
  );
}
