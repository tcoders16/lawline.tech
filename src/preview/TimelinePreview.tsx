// TimelinePreview.tsx
import React from "react";

interface TimelineEntry {
  id: string;
  date: string;
  event: string;
  quote: string;
  source: string;
}

interface Props {
  timeline: TimelineEntry[];
}

const TimelinePreview: React.FC<Props> = ({ timeline }) => {
  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold border-b pb-2">🧾 Timeline Preview</h2>
      {timeline.length === 0 ? (
        <p className="text-gray-500 italic">No timeline data yet.</p>
      ) : (
        <ul className="space-y-4">
          {timeline.map((entry) => (
            <li key={entry.id} className="bg-white shadow p-4 rounded-md border">
              <div className="text-sm text-gray-500">{entry.date}</div>
              <div className="text-lg font-semibold text-gray-900">{entry.event}</div>
              <div className="text-sm italic text-blue-800">“{entry.quote}”</div>
              <div className="text-xs text-gray-500 mt-1">Source: {entry.source}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimelinePreview;
