import { UserButton, auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-[#4d648d] to-[#acc2ef] ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold my-5">
              Chat with any PDF
            </h1>

            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2 ">
            {isAuth && <Button>Go to Chats</Button>}
          </div>
        </div>
      </div>
    </div>
  );
}