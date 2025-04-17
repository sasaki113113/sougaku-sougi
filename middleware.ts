import { NextResponse } from 'next/server';

export function middleware(request) {
  // 環境変数からユーザー名とパスワードを取得（安全のため）
  const username = process.env.BASIC_AUTH_USERNAME || 'admin';
  const password = process.env.BASIC_AUTH_PASSWORD || 'password123';

  // Basic認証用のヘッダー値を作成
  const basicAuth = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
  
  // リクエストからAuthorizationヘッダーを取得
  const authHeader = request.headers.get('authorization');

  // 認証情報がない、または一致しない場合
  if (!authHeader || authHeader !== basicAuth) {
    return new NextResponse(null, {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  // 認証成功の場合、リクエストを続行
  return NextResponse.next();
}

// このミドルウェアを適用するパスを指定
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};