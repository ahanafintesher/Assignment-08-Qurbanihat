import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function proxy(request) {
  const session = await getSession(request);

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/all_animals/animal/:path*", "/my-profile/:path*"],
};