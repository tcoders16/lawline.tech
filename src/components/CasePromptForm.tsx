// src/components/CasePromptForm.tsx
import { useState } from 'react';

interface Props {
  onSubmit: (prompt: string) => void;
}

export default function CasePromptForm({ onSubmit }: Props) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSubmit(prompt);
    setPrompt('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border rounded-xl bg-white shadow"
    >
      <label htmlFor="prompt" className="font-semibold text-gray-800">
        Enter your custom LLM prompt:
      </label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g. Summarize key witness points from this case..."
      />
      <button
        type="submit"
        className="self-start px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Run Prompt
      </button>
    </form>
  );
}
