import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';

const FileUploadDropzone: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': [],
      'text/plain': ['.txt'],
    },
  });

  const handleUpload = async () => {
    setUploading(true);

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        await fetch('http://localhost:3000/api/upload', {
          method: 'POST',
          body: formData,
        });
      } catch (err) {
        console.error('Upload error:', err);
      }
    }

    setUploading(false);
    alert('Upload complete');
  };

  return (
    <div className="max-w-3xl mx-auto py-12">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-50 dark:bg-zinc-800' : 'border-gray-400'
        }`}
      >
        <input {...getInputProps()} />
        <FiUploadCloud className="text-5xl mx-auto text-gray-500 dark:text-gray-200" />
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {isDragActive ? 'Drop the files here...' : 'Drag and drop files here, or click to select'}
        </p>
        <p className="text-xs text-gray-400 mt-2">(PDF, TXT, or image formats supported)</p>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2 text-gray-800 dark:text-gray-100">Files:</h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
            {files.map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {files.length > 0 && (
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50 transition"
        >
          {uploading ? 'Uploading...' : 'Upload All Files'}
        </button>
      )}
    </div>
  );
};

export default FileUploadDropzone;