import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuOptions = [
  {
    id: 1,
    name: "Home",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "History",
    path: "/dashboard/history",
  },
  {
    id: 3,
    name: "Pricing",
    path: "/dashboard/billing",
  },
];

function Appheader() {
  return (
    <div className="flex w-full items-center justify-between border-t border-b border-neutral-200 dark:border-neutral-800 p-2 px-4 md:px-12 lg:px-40">
      <Link href={"/"}>
        <div className="flex items-center gap-2 md:gap-4">
          <Image
            src={"/logo2.svg"}
            alt="logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-12 md:h-12"
          />
          <h1 className="text-sm md:text-xl lg:text-2xl font-bold">MedGenie</h1>
        </div>
      </Link>

      <div className="hidden md:flex gap-12 items-center">
        {menuOptions.map((option, index) => (
          <Link key={index} href={option.path}>
            <h2 className="hover:font-bold cursor-pointer transition-all">
              {option.name}
            </h2>
          </Link>
        ))}
      </div>
      <UserButton />
    </div>
  );
}

export default Appheader;
