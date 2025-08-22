import { useEffect } from "react";
import Layout from "../components/Layout";
import { useAudio } from "../context/AudioContext";
import BlessingSection from "../components/BlessingSection";

const Blessings = () => {
  const { playIfNotPlaying } = useAudio();

  useEffect(() => {
    playIfNotPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {/* Bhagwan Swaminarayan — Kathiawar & the Kathis */}
      <BlessingSection
        imgSrc="/HariKrushnaMaharaj.webp"
        imgAlt="Bhagwan Swaminarayan"
        title="Bhagwan Swaminarayan 🙏"
        subtitle="— Chairperson of the Board"
        role="Chairperson of the Board"
        signatureName="Shree Bhagwan Swaminarayan"
        signatureNote="Guiding Lawline with dharma, bhakti & seva"
        highlightLine={
          <>
            I proudly belong to this lineage —{" "}
            <span className="italic underline">Kathi Darbar</span> — and carry its
            strength as service at <span className="text-green-700">Lawline</span>.
          </>
        }
      >
        <span className="block">
          In the dust of <span className="text-green-700">Kathiawar</span>, where
          oaths were sworn on the blade’s edge,{" "}
          <span className="text-green-700 font-semibold">Bhagwan Swaminarayan</span>{" "}
          met the <span className="text-green-700">Kathi Darbars</span> not to
          suppress their courage, but to elevate it. Valor turned to{" "}
          <span className="text-green-700">seva</span>, pride to{" "}
          <span className="text-green-700">discipline</span>, and the noise of
          battle to the <span className="text-green-700">silence of devotion</span>.
        </span>

        <span className="block mt-4">
          That same transformation defines{" "}
          <strong className="text-green-700">Lawline</strong>. We take complex,
          high-stakes legal work and—without losing edge—forge it into{" "}
          <span className="text-green-700">clarity</span>,{" "}
          <span className="text-green-700">steadiness</span>, and{" "}
          <span className="text-green-700">service</span>. Strength becomes
          structure; speed becomes trust.
        </span>

        <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
          <li>Heritage of courage, expressed as ethical action</li>
          <li>Discipline that turns chaos into clarity</li>
          <li>Service first — technology as quiet, reliable seva</li>
        </ul>
      </BlessingSection>

      {/* Laxminarayan Dev — Vadtal’s Beacon (CEO) */}
      <BlessingSection
        imgSrc="/images/LaxmiNarayanDev/LaxmiNarayanDev.jpg"
        imgAlt="Laxminarayan Dev — Vadtal Dham"
        title="Laxminarayan Dev 👑"
         subtitle="— Chief Executive Officer (CEO)"
        role="Chief Executive Officer (CEO)"
        signatureName="Shree Laxminarayan Dev"
        signatureNote="Vadtal Dham — stewardship through service"
      >
        <span className="block">
          In <span className="text-green-700 font-semibold">Vadtal Dham</span>, the eternal seat of{" "}
          <span className="text-green-700 font-semibold">Shree Laxminarayan Dev</span>, divinity manifests as leadership.
          Generations have drawn <span className="text-green-700">wisdom</span>,{" "}
          <span className="text-green-700">stability</span>, and{" "}
          <span className="text-green-700">faith</span> from this sacred presence.
        </span>

        <span className="block mt-4">
          At <strong className="text-green-700">Lawline</strong>, we revere{" "}
          <span className="text-green-700 font-semibold">Laxminarayan Dev as the CEO</span>. Leadership here means more than
          strategy—it means <span className="text-green-700">clarity of vision</span>,{" "}
          <span className="text-green-700">responsibility to society</span>, and{" "}
          <span className="text-green-700">unwavering values</span>. As Vadtal shines for devotees, Lawline aims to shine in{" "}
          <span className="text-green-700">legal automation</span>, with growth rooted in{" "}
          <span className="text-green-700">faith and service</span>.
        </span>

        <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
          <li>Vision that’s steady and service‑first</li>
          <li>Clarity in decisions, humility in action</li>
          <li>Technology as <span className="text-green-700">seva</span></li>
        </ul>
      </BlessingSection>

      {/* Kastbhanjan Dev — Sarangpur’s Protector (Co‑Founder & Protector) */}
      <BlessingSection
        imgSrc="/images/Kastbhanjandev/Kastbhanjandev.jpg"
        imgAlt="Kastbhanjan Dev — Sarangpur"
        title="Kastbhanjan Dev ⚔️"
        subtitle="— Co‑Founder & Protector"
        role="Co‑Founder & Protector"
        signatureName="Shree Kashtbhanjan Dev"
        signatureNote="Sarangpur — strength, courage & protection"
      >
        <span className="block">
          In <span className="text-green-700 font-semibold">Sarangpur</span> resides the mighty{" "}
          <span className="text-green-700 font-semibold">Kastbhanjan Dev</span>—the <em>Crusher of Sorrows</em>—revered as the{" "}
          <span className="text-green-700">remover of obstacles</span>. Devotees seek His blessing for strength, courage, and
          freedom from fear. His presence is not only worshipped, but{" "}
          <span className="text-green-700">felt as protection</span>.
        </span>

        <span className="block mt-4">
          At <strong className="text-green-700">Lawline</strong>, <span className="text-green-700">Kastbhanjan Dev</span> is
          honored as our <span className="text-green-700">Co‑Founder & Protector</span>. As He shields devotees from challenges,
          His divine force safeguards our mission—keeping our foundation{" "}
          <span className="text-green-700">unshakable</span>. Every line of code is under His watch, ensuring our innovation is{" "}
          <span className="text-green-700">fearless, ethical, and resilient</span>.
        </span>

        <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
          <li>Protection in uncertainty</li>
          <li>Courage to build without fear</li>
          <li>Integrity that outlasts obstacles</li>
        </ul>
      </BlessingSection>
    </Layout>
  );
};

export default Blessings;