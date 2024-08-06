import { NextRequest, NextResponse } from 'next/server';
import { validateToken } from '@/lib/services/validate';
import { getFirestore } from 'firebase-admin/firestore';
import { getFirebaseAdminApp } from '@/firebase';

const db = getFirestore(getFirebaseAdminApp());

// Helper function to handle errors
const handleError = (error: any) => {
  console.error(error);
  return NextResponse.json({ error: error.message }, { status: 500 });
};

export async function GET(req: NextRequest) {
  try {
    const { uid } = await validateToken(req);
    const userDocsPath = `userDocs/${uid}/docs`;

    const snapshot = await db.collection(userDocsPath).orderBy('date_last_modified', 'desc').get();
    const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return NextResponse.json(docs, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}
