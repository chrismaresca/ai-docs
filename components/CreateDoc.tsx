'use client';
import React, { useState, useEffect } from 'react';

interface CreateDocRequest {
  fileName: string;
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

interface Doc {
  id: string;
  fileName: string;
  date_created: FirestoreTimestamp;
  date_last_modified: FirestoreTimestamp;
}

const CreateDocument: React.FC = () => {
  const [fileName, setFileName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [documents, setDocuments] = useState<Doc[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleCreate = async () => {
    setError(null);
    try {
      const response = await fetch('/api/user-doc-management', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName }),
      });

      if (!response.ok) {
        throw new Error('Failed to create document');
      }

      const data = await response.json();
      console.log('Document created with ID:', data.id);
      fetchDocuments(); // Refresh the list of documents after creating a new one
    } catch (err: any) {
      setError(err.message);
    }
  };

  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/user-doc-overview');
      if (!response.ok) {
        throw new Error('Failed to fetch documents');
      }

      const docs = await response.json();
      setDocuments(docs);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments(); // Fetch documents on component mount
  }, []);

  const convertTimestamp = (timestamp: FirestoreTimestamp) => {
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    return date.toLocaleString();
  };

  return (
    <div>
      <h1>Create New Document</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        value={fileName}
        onChange={(e) => setFileName(e.target.value)}
        placeholder="Enter document name"
      />
      <button onClick={handleCreate}>Create</button>
      <h2>Your Documents</h2>
      {loading ? (
        <p>Loading documents...</p>
      ) : (
        <ul>
          {documents.map(doc => (
            <li key={doc.id}>
              <strong>{doc.fileName}</strong>
              <br />
              Created: {convertTimestamp(doc.date_created)}
              <br />
              Last Modified: {convertTimestamp(doc.date_last_modified)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreateDocument;
