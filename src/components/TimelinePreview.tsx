import React from 'react';
import { BsClockHistory } from 'react-icons/bs';

type TimelineEntry = {
  id: string;
  date: string;
  title: string;
  description: string;
  source: string;
};

const mockTimeline: TimelineEntry[] = [
  {
    id: '1',
    date: 'March 21, 1959',
    title: 'Will Executed by Jim Lyerly',
    description: 'Jim Lyerly executed a will naming his daughter Mildred and son Woodrow as caregivers and heirs.',
    source: 'Rape_V_Lyerly.pdf',
  },
  {
    id: '2',
    date: 'April 5, 1960',
    title: 'Care Arrangement Initiated',
    description: 'Mildred and Woodrow began caregiving duties for Jim and his wife Pearl.',
    source: 'Witness Statement.pdf',
  },
];

const TimelinePreview: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-6">
      <h2 className="text-3xl font-bold text-gray-900 flex items-center mr-20 gap-3 mb-10">
        <BsClockHistory className="text-indigo-600 text-2xl left-9.5" />
        Case Timeline
      </h2>

      <ul className="space-y-10 border-l-4 border-indigo-600 pl-6 relative">
        {mockTimeline.map(entry => (
          <li key={entry.id} className="relative">
            {/* Dot */}
            <span className="absolute -left-8.5 top-2 w-4 h-4 bg-indigo-600 border-4 border-white rounded-full shadow-md" />

            {/* Timeline Content */}
            <div className="mb-1 text-sm font-medium text-gray-500">{entry.date}</div>
            <h3 className="text-xl font-semibold text-gray-900">{entry.title}</h3>
            <p className="text-gray-700 mt-1">{entry.description}</p>
            <a
              href="#"
              className="text-sm text-indigo-600 underline font-medium inline-block mt-2"
            >
              📄 {entry.source}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelinePreview;