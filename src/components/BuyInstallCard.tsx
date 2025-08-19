// src/components/BuyInstallCard.tsx
import { EnvelopeIcon } from '@heroicons/react/24/outline';

const BuyInstallCard = () => {
  const emailBody = "Hi, I want to inquire about this product – it looks amazing and I'd love to know more!";

  return (
    <div className="max-w-2xl mx-auto mt-16 bg-gradient-to-tr from-emerald-200 via-white to-emerald-100 p-[2px] rounded-3xl shadow-2xl transition hover:shadow-[0_10px_50px_rgba(16,185,129,0.2)]">
      <div className="bg-white rounded-[22px] px-8 py-7 sm:py-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-8">
        
        {/* Left Side */}
        <div className="text-left space-y-1.5">
          <h3 className="text-[1.4rem] font-bold text-gray-900 chakra-petch-regular">
            Like what you see?
          </h3>
          <p className="text-sm text-gray-600">
            To purchase and install this product, just send us an email below.
          </p>
          <p className="text-[15px] font-semibold text-emerald-700 underline tracking-wide">
            emailtosolankiom@gmail.com
          </p>
        </div>

        {/* Right Side Button */}
        <a
          href={`mailto:emailtosolankiom@gmail.com?subject=Product Inquiry&body=${encodeURIComponent(emailBody)}`}
          className="inline-flex items-center justify-center px-4 py-2 sm:px-3 sm:py-2 bg-emerald-600 text-white font-medium rounded-xl shadow-sm hover:bg-emerald-700 transition"
          aria-label="Email Us"
        >
          {/* Icon only for md+ screens */}
          <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6" />

          {/* Text on small screens only */}
          <span className="ml-2 sm:hidden">Email Us</span>
        </a>
      </div>
    </div>
  );
};

export default BuyInstallCard;