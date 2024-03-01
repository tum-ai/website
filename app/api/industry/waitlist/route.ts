import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const email = await request
    .json()
    .then((res: { data: { email: string } }) => res.data.email);

  await kv.sadd("ip6_waitlist", email);

  return NextResponse.json(email);
}
