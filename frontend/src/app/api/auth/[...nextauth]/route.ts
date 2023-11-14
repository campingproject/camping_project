import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';

export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? '',
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? '',
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID ?? '',
      clientSecret: process.env.NAVER_CLIENT_SECRET ?? '',
    }),
  ],

  // 토큰이나 세션 활용하여 사용자 제어 시 사용하는 로직
  callbacks: {
    async jwt({ token, account, user }: any) {
      // 로그인 직후 토큰에 OAuth access_token 유지
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        // console.log('account', account);
        // console.log('token', token);
      }
      return token; // 반환 값(token) session 콜백으로 전달
    },
    async session({ session, token, user }: any) {
      // access_token과 같은 속성들을 클라이언트로 전송
      session.accessToken = token.accessToken;
      session.user = token as any;
      console.log(session);
      return session; // 반환 값(session) client에서 접근 가능
    },
  },
  // 커스텀 페이지
  pages: {
    signIn: '/auth/login',
    // signOut: '/auth/logout',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
