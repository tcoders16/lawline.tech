import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

const Uploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [caseId, setCaseId] = useState('');
  const [folder, setFolder] = useState('');
  const [status, setStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file || !caseId || !folder) {
      alert('Please fill all fields and select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('caseId', caseId);
    formData.append('folder', folder);

    setStatus('Uploading...');

    try {
      const res = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        setStatus(`✅ Stored in vector DB: ${data.filename}`);
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Failed to upload');
    }
  };

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-2xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Upload a Case File</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Case ID (e.g., om)"
          value={caseId}
          onChange={(e) => setCaseId(e.target.value)}
          className="p-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
        />

        <input
          type="text"
          placeholder="Folder (e.g., email)"
          value={folder}
          onChange={(e) => setFolder(e.target.value)}
          className="p-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900"
        />

        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={handleFileChange}
          className="p-2"
        />

        <button
          onClick={handleUpload}
          className="bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:opacity-90"
        >
          <FaUpload />
          Upload & Embed
        </button>

        {status && <p className="text-sm mt-2">{status}</p>}
      </div>
    </div>
  );
};

export default Uploader;