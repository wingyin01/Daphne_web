"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

import heroPortrait from "@/IMG_8239.jpg";

export default function Hero() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["-2%", "7%"]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 md:px-10">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="overflow-hidden rounded-[2.25rem] border border-white/30 bg-[#e3e3dd]/90 shadow-[0_35px_100px_rgba(26,29,28,0.18)] backdrop-blur-sm"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          ref={container}
          className="relative min-h-[760px] overflow-hidden bg-[#d7d8d2]"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        >
          <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(236,243,240,0.85),transparent_22%),radial-gradient(circle_at_79%_18%,rgba(255,240,216,0.8),transparent_16%),linear-gradient(135deg,#586562_0%,#73817f_26%,#9fa59e_52%,#d9d2c5_100%)]" />
            <div className="absolute left-0 top-0 h-full w-[58%] bg-[linear-gradient(90deg,rgba(28,36,35,0.18),rgba(28,36,35,0.05),transparent)]" />
            <div className="absolute inset-y-0 left-[14%] w-px bg-black/10" />
            <div className="absolute inset-y-0 left-[28%] w-px bg-white/20" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/14 to-transparent" />
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(248deg,rgba(10,14,14,0.22)_0%,rgba(10,14,14,0.08)_26%,rgba(255,255,255,0)_58%)]" />

          <div className="relative z-10 grid min-h-[760px] gap-10 px-6 py-8 md:px-8 md:grid-cols-[320px_minmax(0,1fr)] md:items-end lg:grid-cols-[430px_minmax(0,1.15fr)] lg:px-12 lg:py-12">
            <motion.div
              className="relative flex items-end justify-center md:justify-start"
              initial={{ opacity: 0, x: -22 }}
              transition={{ delay: 0.24, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative h-[560px] w-full max-w-[380px] overflow-hidden rounded-[2rem] border border-white/30 bg-black/10 shadow-[0_40px_90px_rgba(18,21,20,0.32)] backdrop-blur-[2px] md:h-[640px]"
                style={{ y: portraitY }}
              >
                <div className="pointer-events-none absolute inset-0 z-10 rounded-[2rem] border border-white/16" />
                <Image
                  alt="Portrait of Daphne Ng with coffee"
                  className="object-cover object-center"
                  fill
                  priority
                  src={heroPortrait}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,14,14,0.06)_0%,rgba(11,14,14,0)_42%,rgba(11,14,14,0.16)_100%)]" />
              </motion.div>
            </motion.div>

            <div className="flex min-h-full flex-col justify-between gap-10">
              <div className="max-w-3xl pt-6 md:pt-10 lg:pl-4">
                <motion.p
                  className="mb-6 text-sm uppercase tracking-[0.34em] text-[#eef0eb] md:text-base"
                  initial={{ opacity: 0, y: 18 }}
                  transition={{ delay: 0.18, duration: 0.75 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Full-stack engineering • AI product thinking • creative analysis
                </motion.p>
                <motion.h1
                  className="max-w-4xl text-5xl leading-[0.9] font-semibold tracking-[-0.04em] text-[#fbf8f1] md:text-7xl lg:text-[6.2rem]"
                  initial={{ opacity: 0, y: 22 }}
                  transition={{ delay: 0.28, duration: 0.8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Building AI-powered technology for innovation, insight, and real-world impact.
                </motion.h1>
                <motion.p
                  className="mt-6 max-w-2xl text-base leading-7 text-[#dde1db] md:text-lg"
                  initial={{ opacity: 0, y: 22 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  I’m Daphne Ng, a Full-Stack & AI Engineer focused on technology, innovation, financial analysis, and intelligent systems. I enjoy building solutions with AI, LLMs, and software engineering that can support better decisions, create practical value, and contribute to meaningful social development.
                </motion.p>

                <motion.div
                  className="mt-8 flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.75 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <a
                    className="inline-flex items-center gap-2 rounded-full bg-[#f5eee2] px-6 py-3 text-sm font-medium text-[#1b2323] shadow-[0_18px_45px_rgba(10,14,14,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
                    href="/daphne-ng-cv.pdf"
                    rel="noreferrer"
                    target="_blank"
                  >
                    View CV <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-[#fbf8f1] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5"
                    href="https://www.linkedin.com/in/daphne-ng-9a072b264/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Connect on LinkedIn <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="order-3 grid gap-4 text-sm text-[#eff1ed] md:max-w-2xl md:grid-cols-3 lg:pl-4"
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.58, duration: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="rounded-[1.5rem] border border-white/16 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d1d7d0]">Focus</p>
                  <p className="mt-2 text-base text-[#fbf8f1]">AI interfaces, web products, and research-backed problem solving.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/16 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d1d7d0]">Based in</p>
                  <p className="mt-2 text-base text-[#fbf8f1]">Hong Kong, building globally minded digital work.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/16 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#d1d7d0]">Approach</p>
                  <p className="mt-2 text-base text-[#fbf8f1]">Elegant execution with technical depth and editorial taste.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
