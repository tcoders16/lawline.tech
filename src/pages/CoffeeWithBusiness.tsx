import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

const coffeeShops = [
  {
    name: 'Starbucks',
    location: 'Lakeshore, Oakville',
    mapUrl:
      'https://www.google.com/maps/place/Starbucks/@43.4467134,-79.6680536,19.34z/data=!3m1!5s0x882b5c8de558613b:0x164393c62e55ffe4!4m14!1m7!3m6!1s0x882b5d004016ed81:0x41eb6b2bd21b37bb!2sStarbucks!8m2!3d43.4465559!4d-79.6676075!16s%2Fg%2F11mc9xkqvq!3m5!1s0x882b5d004016ed81:0x41eb6b2bd21b37bb!8m2!3d43.4465559!4d-79.6676075!16s%2Fg%2F11mc9xkqvq?entry=ttu',
    tagline: 'Strong brew. Stronger business.',
    content: 'Every sip of dark roast is a reminder — strong ideas need strong fuel. Meet me at Starbucks and let’s code, strategize, and sip our way to scaling.',
    imageUrls: ['/images/starbucks/starbucks01.jpeg', '/images/starbucks/starbucks02.jpeg'],
  },
  {
    name: 'Second Cup Coffee Co.',
    location: 'Lakeshore, Oakville',
    mapUrl:
      'https://www.google.com/maps/place/Second+Cup+Caf%C3%A9/@43.4463569,-79.6694088,17.4z/data=!4m10!1m2!2m1!1sSecond+Cup!3m6!1s0x882b5c8dfc8a7deb:0xa7acba9425e72dc7!8m2!3d43.4467185!4d-79.6673249!15sCgpTZWNvbmQgQ3VwIgOIAQFaDCIKc2Vjb25kIGN1cJIBBGNhZmWqAU0KCS9tLzAyOHk2bBABKg4iCnNlY29uZCBjdXAoADIeEAEiGonqEL8HyO2oDd8-d1bPM_CBuT5a9klEQZI9Mg4QAiIKc2Vjb25kIGN1cOABAA!16s%2Fg%2F11c20t4ls9?entry=ttu',
    tagline: 'Let every sip fuel your growth.',
    content: 'At Second Cup, every conversation starts warm and ends with a roadmap. Business, branding, AI — I bring the brain, you bring the brew.',
    imageUrls: ['/images/secondcup/secondcup01.jpeg', '/images/secondcup/secondcup02.jpeg'],
  },
];

const CoffeeWithBusiness = () => {
  const [currentIndexes, setCurrentIndexes] = useState(coffeeShops.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prevIndexes) =>
        prevIndexes.map((current, i) => (current + 1) % coffeeShops[i].imageUrls.length)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-white text-gray-900 chakra-petch-regular py-16 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Where - ☕️ - ⚡️'s Ideas, and Ideas Builds 👑.
            </h1>
          <p className="text-lg text-gray-700">
            Canadians love coffee — and so do we. <br />
            While you sip your last drop, you'll realize how strong coffee and stronger software grow your business.
          </p>
          <p className="text-md text-emerald-500 font-semibold">📍 Both locations on Lakeshore, Oakville</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-16 px-4 max-w-5xl mx-auto">
          {coffeeShops.map((shop, index) => (
            <div
              key={index}
              onClick={() => window.open(shop.mapUrl, '_blank')}
              className="cursor-pointer border-2 border-emerald-400 hover:border-emerald-500 hover:shadow-emerald-500/40 shadow-lg rounded-3xl transition-all duration-300 group w-full max-w-sm mx-auto"
            >
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-t-2xl">
                <motion.img
                  key={shop.imageUrls[currentIndexes[index]]}
                  src={shop.imageUrls[currentIndexes[index]]}
                  alt={`${shop.name} image`}
                  className="object-cover w-full h-full transition-all duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              </div>

              <div className="px-6 py-4 space-y-2 text-left">
                <h2 className="text-xl font-bold text-gray-800">{shop.name}</h2>
                <p className="text-sm text-gray-500">{shop.location}</p>
                <p className="text-sm italic text-emerald-600">{shop.tagline}</p>
                <p className="text-sm text-gray-700 whitespace-pre-line">{shop.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center space-y-4">
          <h3 className="text-xl text-gray-700">To buy & install Lawline locally</h3>
          <a
            href="mailto:emailtosolankiom@gmail.com?subject=Buy Lawline License"
            className="inline-block bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-xl text-lg font-semibold transition shadow-lg"
          >
            ✉️ emailtosolankiom@gmail.com
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default CoffeeWithBusiness;