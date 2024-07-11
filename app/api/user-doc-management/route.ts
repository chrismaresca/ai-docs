import { NextRequest, NextResponse } from "next/server";
import { addDocument, deleteDocument, getDocument, updateDocument } from "../../../lib/firestore";
import { validateToken } from "@/services/validate";
import { FieldValue } from "firebase-admin/firestore";

const COLLECTION_NAME = "userDocs";

export const getUserDocsPath = (uid: string) => {
  return `${COLLECTION_NAME}/${uid}/docs`;
};

// Helper function to handle errors
const handleError = (error: any) => {
  console.error(error);
  return NextResponse.json({ error: error.message }, { status: 500 });
};

// Interfaces for request data
interface CreateDocRequest {
    fileName: string;
  }
  
  interface UpdateDocRequest {
    id: string;
    fileName?: string;
    [key: string]: any;
  }
  
  // Create a new document
  export async function POST(req: NextRequest) {
    try {
      const { uid } = await validateToken(req);
      const { fileName }: CreateDocRequest = await req.json();
      
      if (!fileName) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
      }
  
      const data = {
        fileName,
        userId: uid,
        date_created: FieldValue.serverTimestamp(),
        date_last_modified: FieldValue.serverTimestamp(),
      };
  
      const userDocPath = getUserDocsPath(uid);
  
      const id = await addDocument(userDocPath, data);
      return NextResponse.json({ id }, { status: 201 });
    } catch (error) {
      return handleError(error);
    }
  }
  
  // Get a document by ID
  export async function GET(req: NextRequest) {
    try {
      const { uid } = await validateToken(req);
      const { searchParams } = new URL(req.url);
      const id = searchParams.get('id');
      
      if (!id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
      }
  
      const userDocPath = getUserDocsPath(uid);
      const doc = await getDocument(userDocPath, id);
      if (!doc || doc.userId !== uid) {
        return NextResponse.json({ error: 'Document not found or unauthorized' }, { status: 404 });
      }
      return NextResponse.json(doc, { status: 200 });
    } catch (error) {
      return handleError(error);
    }
  }
  
  // Update a document by ID
  export async function PUT(req: NextRequest) {
    try {
      const { uid } = await validateToken(req);
      const { id, fileName, ...rest }: UpdateDocRequest = await req.json();
      
      if (!id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
      }
  
      const userDocPath = getUserDocsPath(uid);
      const doc = await getDocument(userDocPath, id);
      if (!doc || doc.userId !== uid) {
        return NextResponse.json({ error: 'Document not found or unauthorized' }, { status: 404 });
      }
  
      const data: { [key: string]: any; date_last_modified: FieldValue } = {
        ...rest,
        date_last_modified: FieldValue.serverTimestamp(),
      };
  
      if (fileName) {
        data.fileName = fileName;
      }
  
      await updateDocument(userDocPath, id, data);
      return NextResponse.json({ message: 'Document updated successfully' }, { status: 200 });
    } catch (error) {
      return handleError(error);
    }
  }
  
  // Delete a document by ID
  export async function DELETE(req: NextRequest) {
    try {
      const { uid } = await validateToken(req);
      const { searchParams } = new URL(req.url);
      const id = searchParams.get('id');
      
      if (!id) {
        return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
      }
  
      const userDocPath = getUserDocsPath(uid);
      const doc = await getDocument(userDocPath, id);
      if (!doc || doc.userId !== uid) {
        return NextResponse.json({ error: 'Document not found or unauthorized' }, { status: 404 });
      }
  
      await deleteDocument(userDocPath, id);
      return NextResponse.json({ message: 'Document deleted successfully' }, { status: 200 });
    } catch (error) {
      return handleError(error);
    }
  }