"use client";

import { motion } from "motion/react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSectionOne() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      {/* <div className="px-4 py-10 md:py-20 "> */}
      <div className="px-2 sm:px-4 py-8 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"🩺Empowering Healthcare with AI Agents "
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          MedGenie is your AI medical voice agent for instant answers, trusted
          health guidance, and effortless appointment scheduling—all in one
          seamless experience.
        </motion.p>
        <Link href={"/sign-in"}>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href={"/dashboard"}>
              <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                Get Started
              </button>
            </Link>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

const Navbar = () => {
  const { user } = useUser();
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 dark:border-neutral-800 p-2 px-4 md:px-12 lg:px-40">
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

      {!user ? (
        <Link href={"/sign-in"}>
          <button className="w-20 md:w-24 lg:w-32 transform rounded-lg bg-black px-4 md:px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Login
          </button>{" "}
        </Link>
      ) : (
        <div className="flex items-center gap-2 md:gap-5">
          <Link href={"/dashboard"}>
            <Button className="px-3 py-2 md:px-6 md:py-2 text-xs md:text-base">
              Dashboard
            </Button>
          </Link>
          <UserButton />
        </div>
      )}
    </nav>
  );
};
