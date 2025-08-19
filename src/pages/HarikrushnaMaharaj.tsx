import { useEffect } from "react";
import Layout from "../components/Layout";
import { useAudio } from "../context/AudioContext";
import VolumeControls from "../components/VolumeControls"; // ✅ Import centralized volume controls

const Blessings = () => {
  const { playIfNotPlaying } = useAudio(); // only need this here

  useEffect(() => {
    playIfNotPlaying(); // Plays global audio
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/HariKrushnaMaharaj.webp"
            alt="Harikrushna Maharaj Vadtal Dham"
            className="w-80 md:w-96 rounded-xl border-4 border-green-600 shadow-xl"
          />
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-[8px] h-[28rem] bg-green-600 rounded-full shadow-md" />

        {/* Right: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-green-700 chakra-petch-bold chakra-petch-regular mb-4">
            Bhagwan Swaminarayan 🙏
          </h1>

          <p className="text-lg text-gray-800 chakra-petch-regular max-w-xl leading-relaxed mb-6">
            May the divine energy guide the vision of{" "}
            <strong className="text-green-700">Lawline</strong>. Every line of
            code is written under the spiritual light of{" "}
            <a
              href="https://www.vadtaldhamtoronto.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 underline hover:text-green-800 font-chakra-petch-bold hover:font-bold transition-all duration-200 ease-in-out"
            >
              Vadtal Dham
            </a>
            . This presence keeps us{" "}
            <span className="text-green-700">grounded</span>,{" "}
            <span className="text-green-700">focused</span>, and in service to a{" "}
            <span className="text-green-700">higher purpose</span> — as we build
            the future of{" "}
            <span className="text-green-700">legal automation</span> with{" "}
            <span className="text-green-700">faith</span> and{" "}
            <span className="text-green-700">clarity</span>.
          </p>

          {/* ✅ Use Global Volume Controls */}
          <div className="mt-2">
            <VolumeControls />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blessings;