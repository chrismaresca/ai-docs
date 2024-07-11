import { getFirestore, CollectionReference, DocumentData, DocumentReference, FieldValue } from 'firebase-admin/firestore';
import { getFirebaseAdminApp } from '@/firebase';

const db = getFirestore(getFirebaseAdminApp());

// Function to get all documents from a collection
export const getCollection = async (collectionName: string): Promise<DocumentData[]> => {
  const collectionRef: CollectionReference = db.collection(collectionName);
  const querySnapshot = await collectionRef.get();
  const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return data;
};

// Function to get a document by ID
export const getDocument = async (collectionName: string, id: string): Promise<DocumentData | null> => {
  const docRef: DocumentReference = db.collection(collectionName).doc(id);
  const docSnap = await docRef.get();
  return docSnap.exists ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Function to add a new document
export const addDocument = async (collectionName: string, data: DocumentData): Promise<string> => {
  const collectionRef: CollectionReference = db.collection(collectionName);
  const docRef = await collectionRef.add(data);
  return docRef.id;
};

// Function to update a document
export const updateDocument = async (collectionName: string, id: string, data: Partial<DocumentData>): Promise<void> => {
  const docRef: DocumentReference = db.collection(collectionName).doc(id);
  await docRef.update(data);
};

// Function to delete a document
export const deleteDocument = async (collectionName: string, id: string): Promise<void> => {
  const docRef: DocumentReference = db.collection(collectionName).doc(id);
  await docRef.delete();
};
