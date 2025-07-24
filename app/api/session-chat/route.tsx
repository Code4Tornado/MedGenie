import { db } from "@/config/db";
import { SessionChatTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  const { notes, selectedDoctor } = await req.json();
  const user = await currentUser();
  try {
    const sessionId = uuidv4();
    const result = await db
      .insert(SessionChatTable)
      .values({
        sessionId: sessionId,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        notes: notes,
        selectedDoctor: selectedDoctor,
        createdOn: new Date().toString(),
      })
      //@ts-ignore
      .returning({ SessionChatTable });

    return NextResponse.json(result[0]?.SessionChatTable);
  } catch (e) {
    return NextResponse.json(e);
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");
  const user = await currentUser();


 if (sessionId === "all") {
  const email = user?.primaryEmailAddress?.emailAddress;
  if (!email) {
    return NextResponse.json([]);
  }

  // Use column directly without alias()
  const result = await db
    .select()
    .from(SessionChatTable)
    .where(eq(SessionChatTable.createdBy, email))  // no alias() necessary
    .orderBy(desc(SessionChatTable.id));

  return NextResponse.json(result);
} else {
  if (!sessionId) {
    return NextResponse.json([]);
  }

  const result = await db
    .select()
    .from(SessionChatTable)
    .where(eq(SessionChatTable.sessionId, sessionId))  // no alias() necessary
    .orderBy(desc(SessionChatTable.id));  // consider adding orderBy for consistency

  return NextResponse.json(result[0]);
}



  // if (sessionId == "all") {
  //   const result = await db
  //     .select()
  //     .from(SessionChatTable)
  //     //@ts-ignore
  //     .where(
  //       eq(SessionChatTable.createdBy, user?.primaryEmailAddress?.emailAddress)
  //     )
  //     .orderBy(desc(SessionChatTable.id));

  //   return NextResponse.json(result);
  // } else {
  //   const result = await db
  //     .select()
  //     .from(SessionChatTable)
  //     //@ts-ignore
  //     .where(eq(SessionChatTable.sessionId, sessionId));

  //   return NextResponse.json(result[0]);
  // }
}
