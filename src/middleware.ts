import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 環境変数から認証情報を取得
  const expectedUsername = process.env.BASIC_AUTH_USERNAME || "admin";
  const expectedPassword = process.env.BASIC_AUTH_PASSWORD || "password123";

  // 認証ヘッダーを取得
  const authHeader = request.headers.get("authorization");

  // 認証ヘッダーがない場合、認証を要求
  if (!authHeader) {
    return new NextResponse(null, {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  // Basic認証ヘッダーを解析
  try {
    const authValue = authHeader.replace("Basic ", "");
    const decodedAuth = atob(authValue); // Edge Runtimeでは atob() を使用
    const [username, password] = decodedAuth.split(":");

    // 認証情報が一致するか確認
    if (username === expectedUsername && password === expectedPassword) {
      // 認証成功
      return NextResponse.next();
    }
  } catch (error) {
    console.error("Auth header parsing error:", error);
  }

  // 認証失敗または解析エラー
  return new NextResponse(null, {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: "/:path*",
};
