import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {
  const email = await request.json().then((res) => res.email);

  await kv.sadd("ip6_waitlist", email);

  return NextResponse.json(email);
}
