// ===============================================
// src/pages/AiClientUpdates.tsx  (Lawline v1)
// ===============================================
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import RealEmailPreview from "../components/RealEmailPreview";

const steps = [
  { title: "Ingest", desc: "Case file is vector‑embedded for fast context." },
  { title: "Prompt", desc: "Type @email + a short instruction." },
  { title: "Generate", desc: "Run Agent drafts a clear client update." },
  { title: "Send", desc: "One click to email + success notification." },
];

const AiClientUpdates: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen py-14 px-4 sm:px-6 lg:px-12 text-black chakra-petch-regular">
        <div className="max-w-6xl mx-auto space-y-14">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center space-y-3"
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              AI Auto Client Updates
            </h1>
            <p className="text-gray-600 text-base sm:text-lg">
              Weekly client emails built from case documents — fast, human, reliable.
            </p>
          </motion.div>

          {/* How it works (concise) */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-2xl border border-emerald-200/60 bg-emerald-50/40 p-4 shadow-sm"
              >
                <div className="text-sm font-semibold text-emerald-700">{s.title}</div>
                <div className="text-[13px] text-gray-700 mt-1">{s.desc}</div>
              </motion.div>
            ))}
          </section>

          {/* Video Showcase (natural aspect, responsive, autoplay loop) */}
          <VideoShowcase
            items={[
              { title: "Demo 1 — From case file to email", src: "/videos/Casecommand.mov", poster: "/videos/poster-1.jpg" },
              { title: "Demo 2 — Prompt + Run Agent + Send", src: "/videos/ResultNotification.mov", poster: "/videos/poster-2.jpg" },
            ]}
          />

          {/* Mini agent demo (UI only, clean) */}
          <MiniAgentDemo />

          {/* Email Preview (real component) */}
          <div className="mt-6">
            <RealEmailPreview />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AiClientUpdates;

/* ------------------------- Subcomponents ------------------------- */

type VideoItem = { title: string; src: string; poster?: string };

const VideoShowcase: React.FC<{ items: VideoItem[] }> = ({ items }) => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const videoRefs = React.useRef<Array<HTMLVideoElement | null>>([]);

  // Keep refs array in sync (prevents sparse array when items length changes)
  React.useEffect(() => {
    videoRefs.current = Array(items.length).fill(null);
  }, [items.length]);

  // Play/pause when section enters/leaves viewport
  React.useEffect(() => {
    const el = sectionRef.current;
    const vids = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (!el || vids.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        vids.forEach((v) => {
          try {
            if (visible) void v.play();
            else v.pause();
          } catch {}
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Continuous playlist (optional): first starts, others follow on end
  React.useEffect(() => {
    const vids = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (!vids.length) return;

    const handlers = vids.map((v, i) => {
      const h = () => {
        const next = vids[(i + 1) % vids.length];
        try {
          next.currentTime = 0;
          void next.play();
        } catch {}
      };
      v.addEventListener("ended", h);
      return { v, h };
    });

    return () => handlers.forEach(({ v, h }) => v.removeEventListener("ended", h));
  }, [items.length]);

  // typed callback ref that returns void (fixes TS error)
  const setVideoRef = (idx: number) => (el: HTMLVideoElement | null): void => {
    videoRefs.current[idx] = el;
  };

  return (
    <section ref={sectionRef} className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">See it in action</h2>
        <span className="text-[12px] text-gray-500">Autoplay · Looped</span>
      </div>

      {/* Natural aspect: no forced ratio, no crop/zoom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((v, i) => (
          <motion.figure
            key={v.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.28, delay: i * 0.05 }}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="w-full bg-black flex items-center justify-center">
              <video
                ref={setVideoRef(i)}
                className="block max-w-full h-auto object-contain"
                src={v.src}
                poster={v.poster}
                muted
                playsInline
                autoPlay
                loop
                controls
              />
            </div>
            <figcaption className="px-4 py-3 text-sm text-gray-700 border-t bg-white">
              {v.title}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
};

const MiniAgentDemo: React.FC = () => {
  const [prompt, setPrompt] = React.useState(
    "@email Weekly update after Aug 17: include medical, police, witness, and court date. Ask for next steps."
  );
  const [loading, setLoading] = React.useState(false);
  const [toast, setToast] = React.useState<{ msg: string; stage: "sending" | "sent" } | null>(null);
  const t1 = React.useRef<number | null>(null);
  const t2 = React.useRef<number | null>(null);

  const runAgent = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // snappy demo
    setLoading(false);
  };

  const sendEmail = () => {
    if (t1.current) { clearTimeout(t1.current); t1.current = null; }
    if (t2.current) { clearTimeout(t2.current); t2.current = null; }

    setToast({ msg: "Sending email…", stage: "sending" });
    t1.current = window.setTimeout(() => {
      setToast({ msg: "Email sent successfully ✅", stage: "sent" });
      t2.current = window.setTimeout(() => setToast(null), 1800);
    }, 1200);
  };

  React.useEffect(() => {
    return () => {
      if (t1.current) clearTimeout(t1.current);
      if (t2.current) clearTimeout(t2.current);
    };
  }, []);

  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900">Quick Agent Demo</h2>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
          Lawline v1
        </span>
      </div>

      <div className="px-5 py-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Prompt */}
        <div className="lg:col-span-1 space-y-2">
          <label className="text-xs font-medium text-gray-600">Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full h-24 text-sm rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 p-3"
          />
          <div className="flex gap-2">
            <button
              onClick={runAgent}
              disabled={loading}
              className="px-3 py-2 text-xs rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? "Running…" : "Run Agent"}
            </button>
            <button
              onClick={() =>
                setPrompt("@email Weekly client update: summarize progress + next hearing date; ask for confirmation.")
              }
              className="px-3 py-2 text-xs rounded-lg border border-gray-300 hover:bg-gray-100"
            >
              Use Sample
            </button>
          </div>
          <p className="text-[11px] text-gray-500">
            Keep it short: <span className="font-semibold">@email</span> + what to include.
          </p>
        </div>

        {/* Preview */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="text-[13px] font-semibold text-gray-900 mb-2">Email Preview</div>
            <div className="rounded-lg bg-white border border-gray-200 p-4">
              <div className="text-sm text-gray-800 whitespace-pre-wrap">
                {loading
                  ? "Generating draft from case vectors…"
                  : `To: Parkdale Legal Services <intake@parkdalelegal.org>
From: Jane Wilson <jane.wilson@email.com>
Subject: Weekly update — status + next steps

Dear Parkdale Legal Team,

Here is a concise status update derived from this week’s filings and notes...
(Preview uses demo content — your Send button will email the real draft.)`}
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={sendEmail}
                  disabled={loading}
                  className="px-3 py-1.5 text-xs rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
                >
                  Send
                </button>
                <button className="px-3 py-1.5 text-xs rounded-lg border border-gray-300 hover:bg-gray-100">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 z-[9999] w-[92%] max-w-md left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 rounded-2xl border border-emerald-300/40 bg-emerald-800/90 backdrop-blur-md shadow-2xl text-white px-4 py-3 sm:px-5 sm:py-4 animate-[fadeIn_.28s_ease-out_both]"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/15">
              {toast.stage === "sending" ? (
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor" className="opacity-75" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <path fill="currentColor" d="M9.55 17.1 4.45 12l1.4-1.4 3.7 3.7 8.6-8.6 1.4 1.4-10 10z" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold tracking-tight">
                {toast.stage === "sending" ? "Sending email…" : "Email sent"}
              </p>
              <p className="mt-0.5 text-xs sm:text-[13px] text-emerald-50/90">{toast.msg}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="ml-1 rounded-lg p-1 text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="Dismiss"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path fill="currentColor" d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.17 12 2.89 5.71 4.3 4.29l6.29 6.3 6.29-6.3z" />
            </svg>
            </button>
          </div>
          <div className="relative mt-3 h-1.5 overflow-hidden rounded-full bg-white/20">
            <div className={toast.stage === "sending" ? "h-full bg-white/70 animate-[bar_1.2s_linear_forwards]" : "h-full bg-white/90"} />
          </div>
        </div>
      )}
    </section>
  );
};