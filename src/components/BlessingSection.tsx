import type { ReactNode } from "react";
import { motion } from "framer-motion";

type BlessingSectionProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle?: string;
  /** e.g., "Chief Executive Officer (CEO)" */
  role?: string;
  /** e.g., "Shree Laxminarayan Dev" */
  signatureName?: string;
  /** optional note under signature, e.g., "Vadtal Dham — stewardship through service" */
  signatureNote?: string;
  children: ReactNode;
  /** Optional personal emphasis line inserted between paragraphs */
  highlightLine?: ReactNode;
};

export default function BlessingSection({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  role,
  signatureName,
  signatureNote,
  children,
  highlightLine,
}: BlessingSectionProps) {
  return (
    <section className="w-full bg-white ">
      <div
        className={[
          // Width container
          "mx-auto w-full",
          "max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl",
          "hd:max-w-[1400px]",
          // Spacing
          "px-4 sm:px-6 md:px-8 lg:px-10",
          "pt-16 md:pt-20 lg:pt-24",
          "pb-16 md:pb-20 lg:pb-24",
          // Layout
          "flex flex-col md:flex-row items-center justify-center",
          "gap-8 md:gap-10 lg:gap-12 hd:gap-14",
          "chakra-petch-regular",
        ].join(" ")}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-[48%] flex justify-center"
        >
          <img
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
            className={[
              "rounded-2xl border-4 border-green-600 shadow-xl object-cover",
              // Responsive sizing
              "w-[16rem] sm:w-[18rem] md:w-[20rem] lg:w-[22rem] xl:w-[24rem] hd:w-[26rem]",
            ].join(" ")}
          />
        </motion.div>

        {/* Vertical divider */}
        <div
          aria-hidden="true"
          className={[
            "hidden md:block",
            "w-[6px]",
            "h-[18rem] md:h-[22rem] lg:h-[24rem] xl:h-[26rem] hd:h-[28rem]",
            "bg-green-600 rounded-full shadow-md",
          ].join(" ")}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="w-full md:w-[52%] flex flex-col items-start text-left"
        >
          <h2
            className={[
              "text-green-700 chakra-petch-bold",
              // Responsive title ramp
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
              "leading-tight",
            ].join(" ")}
          >
            {title}{" "}
            {subtitle ? (
              <span className="text-gray-500 font-normal block text-xl sm:text-2xl mt-1">
                {subtitle}
              </span>
            ) : null}
          </h2>

          <div className="mt-4 space-y-4 text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed">
            {children}
          </div>

          {/* Optional personal highlight line (e.g., Kathi Rajput note) */}
          {highlightLine ? (
            <div className="mt-4 text-green-700 text-base sm:text-lg md:text-xl font-semibold">
              {highlightLine}
            </div>
          ) : null}

          {/* Signature / Title block */}
          {(role || signatureName) && (
            <div className="mt-6 w-full text-left border-t border-green-600 pt-3">
              {role && (
                <p className="text-sm sm:text-base md:text-lg text-green-700 font-semibold">
                  {role}
                </p>
              )}
              {signatureName && (
                <p className="text-sm sm:text-base md:text-lg text-gray-900 chakra-petch-bold">
                  {signatureName}
                </p>
              )}
              {signatureNote && (
                <p className="text-xs sm:text-sm text-gray-500">
                  {signatureNote}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}