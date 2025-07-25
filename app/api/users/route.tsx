import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    const user= await currentUser()

    try {
        // check if user already exist
        const users = await db.select().from(usersTable)
        //@ts-ignores
        .where(eq(usersTable.email, user?.primaryEmailAddress?.emailAddress))
        //if not then create New User
        if (users?.length == 0) {
            const result=await db.insert(usersTable).values({
                //@ts-ignore
                name:user?.fullName,
                email: user?.primaryEmailAddress?.emailAddress,
                credits: 20
                //@ts-ignore
            }).returning({ usersTable })
            return NextResponse.json(result[0]?.usersTable)
        }
        return NextResponse.json(users[0])
    } catch (e) {
        return NextResponse.json(e)
    }
}