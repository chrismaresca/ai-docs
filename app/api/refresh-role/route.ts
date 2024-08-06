import {NextRequest, NextResponse} from 'next/server';
import {refreshNextResponseCookies} from 'next-firebase-auth-edge/lib/next/cookies';
import {getFirebaseAuth, getTokens} from 'next-firebase-auth-edge';
import { authConfig } from '@/config/server-config';

 
const commonOptions = {
    apiKey: authConfig.apiKey,
    cookieName: authConfig.cookieName,
    cookieSerializeOptions: authConfig.cookieSerializeOptions,
    cookieSignatureKeys: authConfig.cookieSignatureKeys,
    serviceAccount: authConfig.serviceAccount,
  };
 
const {setCustomUserClaims, getUser} = getFirebaseAuth({
  serviceAccount: commonOptions.serviceAccount,
  apiKey: commonOptions.apiKey
});
 
export async function POST(request: NextRequest) {
  const tokens = await getTokens(request.cookies, commonOptions);
 
  if (!tokens) {
    throw new Error('Cannot update custom claims of unauthenticated user');
  }
 
  await setCustomUserClaims(tokens.decodedToken.uid, {
    "someCustomClaim": {
      updatedAt: Date.now()
    }
  });
 
  const user = await getUser(tokens.decodedToken.uid);

  if (!user) {
    throw new Error('User not found');
  }

  const response = new NextResponse(
    JSON.stringify({
      customClaims: user.customClaims
    }),
    {
      status: 200,
      headers: {'content-type': 'application/json'}
    }
  );
 
  return refreshNextResponseCookies(request, response, commonOptions);
}