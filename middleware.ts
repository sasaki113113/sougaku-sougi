import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authorizationHeader = request.headers.get("authorization");

  if (!authorizationHeader) {
    return new NextResponse(null, {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }

  const credentials = Buffer.from(
    authorizationHeader.replace("Basic ", ""),
    "base64"
  ).toString("ascii");

  const [username, password] = credentials.split(":");

  if (
    username !== (process.env.BASIC_AUTH_USERNAME || "admin") ||
    password !== (process.env.BASIC_AUTH_PASSWORD || "password123")
  ) {
    return new NextResponse(null, {
      status: 401,
      headers: { "WWW-Authenticate": "Basic" },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
