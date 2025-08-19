// RealEmailPreview.tsx
import { useEffect, useState } from 'react';
import { ClipboardDocumentIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

const RealEmailPreview = () => {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const [toast, setToast] = useState<{ message: string; type: 'copy' | 'send' | null }>({
    message: '',
    type: null,
  });

  const [emailContent, setEmailContent] = useState(
    `Mr. Sisodiya,

I hope you're doing well. Here’s your legal case update for the week of ${today}:

• Earlier this week, we carefully reviewed the documents received from the opposing party, including the new affidavit and evidence package.
• During our review, we noticed a few discrepancies in the timeline provided by the other side. These details have been flagged and could help us during negotiations or in court.
• We've updated your internal case file with a summary of the main points, including notes from our legal team and key highlights.
• The court has tentatively scheduled your next hearing for September 4, 2025. We're currently waiting for official confirmation.
• A draft of our next communication to the court has been prepared. We’d love for you to take a look and share any feedback you may have before we submit it.

If you'd like to discuss anything in more detail, or schedule a short call this week, just let us know—we’re here to help.

Thanks again for your trust in our team.

Warm regards,  
Shalini Desai  
Litigation Associate  
Veritas Law LLP`
  );

  useEffect(() => {
    if (toast.type) {
      const timer = setTimeout(() => setToast({ message: '', type: null }), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="w-full max-w-screen-md mx-auto p-2 sm:p-4 md:p-6">
      <div className="p-[1px] rounded-2xl bg-gradient-to-r from-emerald-300 via-emerald-500 to-emerald-300 shadow-md relative">
        <div className="bg-white rounded-[14px] overflow-hidden chakra-petch-regular">

          {/* Email Header */}
          <div className="bg-gray-100 px-4 sm:px-6 py-4 border-b border-gray-300 rounded-t-[14px]">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-800">From:</span> Shalini Desai &lt;shalini@veritaslaw.ca&gt;
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-800">To:</span> Mr. Sisodiya &lt;client@example.com&gt;
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-800">Subject:</span> Weekly Case Update – Veritas Law
            </p>
          </div>

          {/* Email Body */}
<div className="p-6 whitespace-pre-wrap text-[15px] leading-relaxed tracking-wide text-gray-900 bg-white space-y-4">

  <p><strong className="text-gray-800">Mr. Sisodiya,</strong></p>

  <p>
    I hope you're having a smooth week. Here's your legal case update for the week of 
    <span className="font-bold text-green-600"> {today}</span>:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>We’ve reviewed the latest documents from the opposing party, including a new affidavit and evidence file.</li>

    <li>
      <strong className="text-red-700 underline">
        We found some inconsistencies in their reported timeline
      </strong>, which may work in our favor during negotiations or in court.
    </li>

    <li>Our team added a fresh summary to your case file, highlighting the key points and internal notes.</li>

    <li>
      Your next court hearing is tentatively scheduled for 
      <span className="text-green-600 font-semibold underline"> September 4, 2025</span>. We're just waiting on formal confirmation.
    </li>

    <li>We’ve also drafted the next court update. Please review and share feedback before we send it in.</li>
  </ul>

  <p>
    Let us know if you'd like to go over anything or schedule a quick call — we're always here to support you.
  </p>

  <div className="pt-4">
    <p>Thank you again for your continued trust.</p>
    <br />
    <p><strong className="text-gray-800">Warm regards,</strong></p>
    <p><strong className="text-gray-800">Shalini Desai</strong></p>
    <p><strong className="text-gray-800">Litigation Associate</strong></p>
    <p><strong className="text-gray-800">Veritas Law LLP</strong></p>
  </div>
</div>

          {/* Footer Buttons */}
          <div className="bg-gray-50 px-4 sm:px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(emailContent);
                setToast({ message: 'Copied to clipboard ✅', type: 'copy' });
              }}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full"
              title="Copy to Clipboard"
            >
              <ClipboardDocumentIcon className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                setToast({ message: 'Email sent successfully 📤', type: 'send' });
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full"
              title="Send to Client"
            >
              <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {toast.type && (
          <div
            className={`fixed bottom-14 right-4 sm:right-6 px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 ease-in-out z-50
            ${toast.type === 'copy' ? 'bg-gray-800 text-white' : 'bg-emerald-600 text-white'}`}
          >
            {toast.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default RealEmailPreview;