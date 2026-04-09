"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="mx-2 mt-10 mb-40 overflow-hidden rounded-[2rem] bg-white/70 shadow-[0_30px_80px_rgba(54,34,17,0.12)] backdrop-blur-sm">
      <div
        className="relative flex h-[70vh] min-h-[560px] items-center justify-center overflow-hidden bg-white"
        ref={container}
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-8 text-white mix-blend-difference md:p-20">
          <p className="w-full self-end text-base uppercase tracking-[0.25em] md:w-[46vw] md:text-[1.7vw]">
            Building beautiful web experiences and practical AI systems with the right balance of craft, rigor, and curiosity.
          </p>
          <p className="text-4xl uppercase md:text-[5vw]">Full-Stack & AI Engineer</p>
        </div>
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div className="relative h-full w-full" style={{ y }}>
            <Image
              alt="Abstract editorial city background"
              className="grayscale-0"
              fill
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
