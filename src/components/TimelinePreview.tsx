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
    description: 'Jim Lyerly signed an official last will, designating Mildred and Woodrow as primary caregivers and beneficiaries.',
    source: 'Will_Executed_JimLyerly.pdf',
  },
  {
    id: '2',
    date: 'April 5, 1960',
    title: 'Care Duties Commenced',
    description: 'Mildred and Woodrow began caregiving for Jim and Pearl Lyerly as per the terms outlined in the will.',
    source: 'Care_Arrangement_Affidavit.pdf',
  },
  {
    id: '3',
    date: 'April 19, 1962',
    title: 'Property Transfer Agreement',
    description: 'A signed deed confirmed transfer of the Rowan County property to Woodrow in exchange for lifelong care.',
    source: 'Property_Transfer_Deed.pdf',
  },
  {
    id: '4',
    date: 'June 1, 1965',
    title: 'Witness Testimony Submitted',
    description: 'A neighbor testified that caregiving duties were consistently fulfilled by Mildred and Woodrow from 1960 to 1965.',
    source: 'Witness_Statement_Roberts.pdf',
  },
  {
    id: '5',
    date: 'November 3, 1968',
    title: 'Dispute Filed by Katherine',
    description: 'Katherine Lyerly filed a petition challenging the will, alleging undue influence and lack of mental capacity.',
    source: 'Petition_Will_Dispute.pdf',
  },
];

const TimelinePreview: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-20 px-6">

      {/* Timeline Heading */}
      <div className="relative mb-10 pl-12">
        {/* Clock Icon inside circular border */}
        <div className="absolute left-0 top-1 w-8 h-8 bg-white border-[3px] border-blue-700 rounded-full flex items-center justify-center shadow-md z-10 -ml-3.5">
          <BsClockHistory className="text-blue-700 text-xl" />
        </div>

        {/* Case Timeline Heading */}
        <h2 className="inline-block text-3xl font-bold text-gray-900 border-b-[1.6px] border-blue-700 pb-1">
          Case Timeline
        </h2>
      </div>

      <ul className="space-y-10 border-l-4 border-blue-700 pl-6 relative">
        {mockTimeline.map(entry => (
          <li key={entry.id} className="relative">
            {/* Dot */}
            <span className="absolute -left-8.5 top-2 w-4 h-4 bg-blue-700 border-4 border-white rounded-full shadow-md" />

            {/* Timeline Content */}
            <div className="mb-1 text-sm font-medium text-gray-500">{entry.date}</div>
            <h3 className="text-xl font-semibold text-gray-900">{entry.title}</h3>
            <p className="text-blue-700 mt-1">{entry.description}</p>
            <a
              href="#"
              className="text-sm text-blue-700 underline font-medium inline-block mt-2"
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