import { NextRequest, NextResponse } from "next/server";

// Edge Runtimeではなく、Node.js環境で実行するよう指定
export const runtime = "nodejs";

export function middleware(request: NextRequest) {
  // 環境変数から認証情報を取得（未設定の場合はデフォルト値）
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
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  }

  // Basic認証ヘッダーを解析
  try {
    const authValue = authHeader.replace("Basic ", "");
    const decodedAuth = Buffer.from(authValue, "base64").toString("utf-8");
    const [username, password] = decodedAuth.split(":");

    // 認証情報が一致するか確認
    if (username === expectedUsername && password === expectedPassword) {
      // 認証成功
      return NextResponse.next();
    }
  } catch (error) {
    // 認証ヘッダーの解析に失敗
    console.error("Auth header parsing error:", error);
  }

  // 認証失敗または解析エラー
  return new NextResponse(null, {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}

// 最もシンプルなパスマッチャー設定
export const config = {
  matcher: "/:path*",
};
