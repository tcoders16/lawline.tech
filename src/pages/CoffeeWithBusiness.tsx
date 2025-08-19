// src/pages/CoffeeWithBusiness.tsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const coffeeShops = [
  {
    name: 'Starbucks',
    location: 'Lakeshore, Oakville',
    mapUrl: 'https://www.google.com/maps/place/Starbucks/@43.4465559,-79.8200428,12z/data=!4m10!1m2!2m1!1slakeshore+starbucks!3m6!1s0x882b4673f0540fe9:0x462a95a1f8c41db6!8m2!3d43.5498679!4d-79.5871829!15sChNsYWtlc2hvcmUgc3RhcmJ1Y2tzIgOIAQFaFSITbGFrZXNob3JlIHN0YXJidWNrc5IBC2NvZmZlZV9zaG9wqgFuCgwvZy8xaGR5eDRydmcKCS9tLzAxOGNfchABKhciE2xha2VzaG9yZSBzdGFyYnVja3MoADIfEAEiGwcNSCQ6QUxJQgtor_EIykU1KiYA2Xg0-PvB8zIXEAIiE2xha2VzaG9yZSBzdGFyYnVja3PgAQA!16s%2Fg%2F1thw7c86?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D',
    tagline: 'Strong brew. Stronger business.',
    imageUrls: [
      '/images/starbucks/starbucks01.jpeg',
      '/images/starbucks/starbucks02.jpeg',
    ],
  },
  {
    name: 'Second Cup Coffee Co',
    location: 'Lakeshore, Oakville',
    mapUrl: 'https://www.google.com/maps/place/Second+Cup+Caf%C3%A9/@43.4466761,-80.0672725,10z/data=!4m10!1m2!2m1!1sSecond+Cup!3m6!1s0x882b5c8dfc8a7deb:0xa7acba9425e72dc7!8m2!3d43.4467185!4d-79.6673249!15sCgpTZWNvbmQgQ3VwIgOIAQFaDCIKc2Vjb25kIGN1cJIBBGNhZmWqAU0KCS9tLzAyOHk2bBABKg4iCnNlY29uZCBjdXAoADIeEAEiGonqEL8HyO2oDd8-d1bPM_CBuT5a9klEQZI9Mg4QAiIKc2Vjb25kIGN1cOABAA!16s%2Fg%2F11c20t4ls9?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D',
    tagline: 'Let every sip fuel your growth.',
    imageUrls: [
      '/images/secondcup/secondcup01.jpeg',
      '/images/secondcup/secondcup02.jpeg',
    ],
  },
];

const CoffeeWithBusiness = () => {
  const [currentIndexes, setCurrentIndexes] = useState(coffeeShops.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map((current, i) =>
          (current + 1) % coffeeShops[i].imageUrls.length
        )
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleChangeImage = (shopIndex: number, direction: 'prev' | 'next') => {
    setCurrentIndexes((prev) =>
      prev.map((current, i) => {
        if (i !== shopIndex) return current;
        const total = coffeeShops[i].imageUrls.length;
        return direction === 'next'
          ? (current + 1) % total
          : (current - 1 + total) % total;
      })
    );
  };

  return (
    <Layout>
    <div className="min-h-screen bg-white text-gray-900 chakra-petch-regular py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Let’s Grab a Coffee ☕
        </h1>
        <p className="text-lg text-gray-700">
          Canadians love coffee — and so do we. <br />
          While you sip your last drop, you'll realize how strong coffee and stronger software grow your business.
        </p>
        <p className="text-md text-emerald-500 font-semibold">
          📍 Both locations on Lakeshore, Oakville
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-4xl mx-auto">
        {coffeeShops.map((shop, index) => (
          <div
            key={index}
            onClick={() => window.open(shop.mapUrl, '_blank')}
            className="cursor-pointer bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Image Slider */}
                <div className="relative w-full  aspect-[3/4] overflow-hidden rounded-t-2xl">
                <motion.img
                    key={shop.imageUrls[currentIndexes[index]]}
                    src={shop.imageUrls[currentIndexes[index]]}
                    alt={`${shop.name} image`}
                    className="object-cover w-full h-full transition-all duration-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleChangeImage(index, 'prev');
                    }}
                    className="bg-white/70 text-black px-2 py-1 rounded-full shadow hover:bg-white"
                    >
                    ◀
                    </button>
                    <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleChangeImage(index, 'next');
                    }}
                    className="bg-white/70 text-black px-2 py-1 rounded-full shadow hover:bg-white"
                    >
                    ▶
                    </button>
                </div>
                </div>

            {/* Content */}
            <div className="px-6 py-4 space-y-2 text-left">
              <h2 className="text-xl font-bold">{shop.name}</h2>
              <p className="text-sm text-gray-500">{shop.location}</p>
              <p className="text-sm italic text-emerald-600">{shop.tagline}</p>
              <p className="text-sm text-gray-700">
                We know how productive the day gets after a great coffee. <br />
                Same with my software — empowering your business sip by sip.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Email */}
      <div className="mt-20 text-center space-y-4">
        <h3 className="text-xl text-gray-700">Book your next meeting</h3>
        <a
          href="mailto:emailtosolankiom@gmail.com?subject=Coffee Chat Booking"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
        >
          📩 emailtosolankiom@gmail.com
        </a>
      </div>
    </div>
    </Layout>
  );
};

export default CoffeeWithBusiness;