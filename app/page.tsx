"use client";

import {
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion, type Variants } from "motion/react";
import portraitImage from "../ABAECEAD-324E-447B-927E-65239BA1B699_1_102_o.jpeg";
import Image from "next/image";


import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";

const projects = [
  {
    title: "Vibenotes",
    subtitle: "Proactive AI Learning Platform",
    type: "Startup Project",
    bullets: [
      "Designed a proactive AI-powered education platform that unifies note-taking, study planning, AI explanation, and revision support into a single iPad-based workflow.",
      "Proposed a zero-prompt personalized learning system that adapts to student performance, handwriting, and study behavior through a Personal Study Code engine.",
      "Designed features for format-cloned mock exams, adaptive revision materials, and Socratic hinting to improve learning efficiency and reduce administrative burden.",
    ],
  },
  {
    title: "MarketGaze",
    subtitle: "AI-Driven Financial Analysis and RAG Platform",
    type: "Industrial Project",
    bullets: [
      "Developed a financial analysis platform for value investing that combines stock screening, portfolio optimization, and AI-powered document analysis.",
      "Built pipelines covering over 5,000 U.S. stocks and approximately 1.9 million financial news articles, with engineered value and quality metrics for ranking investment opportunities.",
      "Implemented a RAG-based metadata extraction service and web platform for semantic document search, portfolio insights, personalized recommendations, and news intelligence.",
    ],
  },
  {
    title: "Medical Image Segmentation System",
    subtitle: "Deep Learning Research Project",
    type: "Research Project",
    bullets: [
      "Assisted in developing a PyTorch-based medical image segmentation pipeline for anterior mediastinal lesion analysis from imaging data.",
      "Contributed to preprocessing, augmentation, cross-validation, model training, and evaluation for pixel-level lesion segmentation.",
      "Supported experiments with attention-enhanced U-Net-style architectures and evaluated performance using Dice score, IoU, precision, and recall.",
    ],
  },
];

const experience = [
  {
    company: "Sengital Limited",
    role: "Full-Stack Engineer",
    period: "Aug 2024 – Aug 2025",
    type: "Internship",
    bullets: [
      "Developed and maintained web-based solutions across both front-end and back-end systems.",
      "Built features supporting market analysis, data aggregation, and validation across multiple data sources.",
      "Applied LLM workflows, prompt engineering, and generative AI techniques to improve intelligent product features.",
      "Performed data analysis for return forecasting, risk assessment, and opportunity identification.",
    ],
  },
  {
    company: "University of Saskatchewan",
    role: "Research Assistant",
    period: "May 2024 – Aug 2024",
    type: "On-site",
    bullets: [
      "Developed a deep learning model for medical image segmentation.",
      "Conducted comparative analysis against existing methods to improve model accuracy and efficiency.",
      "Supported research implementation, testing, and evaluation in applied AI and medical imaging.",
    ],
  },
  {
    company: "STEM Accelerator Limited (RoboCode Academy)",
    role: "STEM Instructor, Coding and Robotics",
    period: "Jul 2023 – Aug 2023",
    type: "Part-time",
    bullets: [
      "Delivered coding and robotics-related STEM learning activities for students.",
      "Contributed to robotic applications, AI-driven analytics platforms, and game development projects.",
      "Designed and tested AI solutions for real-world applications.",
    ],
  },
];

const education = [
  {
    school: "The University of Hong Kong",
    degree: "Master of Science in Engineering – Innovative Design and Technology, Artificial Intelligence",
    period: "Sep 2025 – Jun 2026",
    note: "Focused on advanced data analytics, intelligent systems, and interdisciplinary engineering innovation.",
  },
  {
    school: "City University of Hong Kong",
    degree: "Bachelor of Engineering in Information Engineering, Electrical and Electronics Engineering",
    period: "Sep 2021 – Sep 2025",
    note: "Built a strong foundation in computer engineering, data analytics, robotics, and AI, complemented by practical experience through internships, international research, and leadership roles in student organizations. Proficient in Python, C++, and Java, with a proven ability to apply innovative technologies to solve complex challenges.",
    activities: [
      "External Vice President – Electrical Engineering Student Chapter (2023 – 2024)",
      "Student Ambassador – College of Engineering (2023 – 2025)",
    ],
  },
];

const honors = [
  {
    title: "Law Tat Chuen Outstanding Startup Idea Award",
    issuer: "City University of Hong Kong",
    period: "Nov 2023",
    detail: "HK Tech 300 Training BootCamp",
  },
  {
    title: "HKSAR Government Scholarship Fund – Reaching Out Award",
    issuer: "HKSAR Government",
    period: "Aug 2022",
  },
];

const languages = [
  {
    name: "Cantonese",
    level: "Native or bilingual proficiency",
  },
  {
    name: "Chinese",
    level: "Full professional proficiency",
  },
  {
    name: "English",
    level: "Full professional proficiency",
  },
];

const focusAreas = [
  {
    title: "AI products with real-world utility",
    text: "RAG pipelines, prompt workflows, intelligent interfaces, and model-backed product experiences.",
    icon: Brain,
  },
  {
    title: "Full-stack engineering",
    text: "Responsive frontends, API design, and data integration for elegant end-to-end systems.",
    icon: Code2,
  },
  {
    title: "Engineering research mindset",
    text: "Experimentation, evaluation, and thoughtful iteration for ambiguous technical problems.",
    icon: Sparkles,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-6 md:px-10">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="rounded-full border border-black/10 bg-white/60 px-4 py-3 text-sm uppercase tracking-[0.25em] text-stone-700 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm"
          initial={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Daphne Ng • Full-Stack & AI Engineer
        </motion.div>
      </section>


      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-8 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <motion.div
          className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.1)] backdrop-blur-md md:p-10"
          initial="hidden"
          transition={{ delay: 0.1 }}
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-6 flex flex-wrap gap-3 text-sm uppercase tracking-[0.25em] text-stone-600">
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">AI + innovation</span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">Tech + business analysis</span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">Creative problem solving</span>
          </div>
          <h1 className="max-w-4xl text-5xl leading-[0.94] font-semibold tracking-tight text-stone-900 md:text-7xl">
            Creating intelligent digital products where AI, engineering, business analysis, and creativity work together.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
            I’m Daphne Ng, an aspiring <span className="font-semibold text-stone-900">Full-Stack & AI Engineer</span> who enjoys turning emerging technology, data-driven thinking, and innovative ideas into polished user experiences and practical product solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              aria-label="View CV"
              className="inline-flex items-center gap-2 rounded-full border border-[#d8b16a]/60 bg-[#f3d59a] px-6 py-3 text-sm font-semibold shadow-[0_18px_45px_rgba(216,177,106,0.24)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#efcc88]"
              href="/Professional%20CV%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              title="View CV"
              style={{ color: "#111111" }}
            >
              <span style={{ color: "#111111" }}>View CV</span>
              <Download className="h-4 w-4" style={{ color: "#111111" }} />
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-6 py-3 text-sm font-medium text-stone-900" href="https://www.linkedin.com/in/daphne-ng-9a072b264/" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />LinkedIn<ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-8"
          initial="hidden"
          transition={{ delay: 0.2 }}
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[var(--card-strong)] p-5 shadow-[0_30px_80px_rgba(54,34,17,0.08)] transition-transform duration-500 hover:-translate-y-1"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-3xl" />
            <div className="relative rounded-[1.5rem] border border-white/60 bg-white/70 p-3 shadow-inner">
              <Image alt="Portrait of Daphne Ng" className="h-auto w-full rounded-[1.25rem] object-cover" height={540} priority src={portraitImage} width={360} />
            </div>
            <div className="relative mt-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-2xl font-semibold text-stone-900">Daphne Ng</p>
                <p className="mt-1 text-sm text-stone-600">Aspiring Full-Stack & AI Engineer</p>
              </div>
              <div className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm text-stone-700">
                <MapPin className="mr-2 inline h-4 w-4" />Hong Kong
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <LandingAccordionItem />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <motion.div
          className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.08)] backdrop-blur-md md:p-10"
          initial="hidden"
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-stone-600">
            <BriefcaseBusiness className="h-4 w-4" />Projects
          </div>
          <motion.div className="grid gap-6" initial="hidden" variants={staggerContainer} whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="rounded-[1.75rem] border border-black/10 bg-white/70 p-6 shadow-[0_20px_60px_rgba(54,34,17,0.06)] backdrop-blur-sm md:p-8"
                variants={fadeUp}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl font-semibold text-stone-900 md:text-3xl">
                      {project.title}
                      <span className="text-stone-500"> | {project.subtitle}</span>
                    </h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-stone-500">{project.type}</p>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-stone-300 via-stone-200 to-transparent md:mt-4 md:w-40" />
                </div>
                <ul className="mt-6 space-y-4 text-base leading-8 text-stone-700 md:text-lg">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d8b16a]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <motion.div className="mb-8 max-w-3xl" initial="hidden" variants={fadeUp} whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
          <p className="text-sm uppercase tracking-[0.28em] text-stone-600">What I do</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Technical depth shaped by both product work and research.</h2>
        </motion.div>
        <motion.div className="grid gap-6 md:grid-cols-3" initial="hidden" variants={staggerContainer} whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {focusAreas.map(({ title, text, icon: Icon }) => (
            <motion.article
              key={title}
              className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-7 shadow-[0_24px_60px_rgba(54,34,17,0.08)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(54,34,17,0.12)]"
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <div className="mb-5 inline-flex rounded-2xl bg-stone-950 p-3 text-white"><Icon className="h-5 w-5" /></div>
              <h3 className="text-2xl font-semibold text-stone-900">{title}</h3>
              <p className="mt-3 text-base leading-7 text-stone-700">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <motion.div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]" initial="hidden" variants={staggerContainer} whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
          <motion.div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.08)] backdrop-blur-md" variants={fadeUp}>
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-stone-600"><BriefcaseBusiness className="h-4 w-4" />Experience</div>
            <div className="space-y-7">
              {experience.map((item) => (
                <article key={item.company + item.role} className="border-t border-black/8 pt-7 first:border-t-0 first:pt-0">
                  <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px] md:items-start">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-semibold text-stone-900">{item.role}</h3>
                      <p className="mt-1 text-lg text-stone-700">{item.company}</p>
                    </div>
                    <div className="text-left text-sm text-stone-600 md:text-right md:justify-self-end">
                      <p>{item.period}</p>
                      <p>{item.type}</p>
                    </div>
                  </div>
                  <ul className="mt-4 ml-5 list-disc space-y-3 text-base leading-7 text-stone-700 marker:text-[var(--accent)]">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="pl-1">{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.08)] backdrop-blur-md" variants={fadeUp}>
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-stone-600"><GraduationCap className="h-4 w-4" />Education</div>
            <div className="space-y-6">
              {education.map((item) => (
                <article key={item.school} className="rounded-[1.5rem] border border-black/10 bg-white/70 p-6">
                  <h3 className="text-2xl font-semibold text-stone-900">{item.school}</h3>
                  <p className="mt-2 text-lg leading-8 text-stone-700">{item.degree}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-stone-500">{item.period}</p>
                  <p className="mt-4 text-base leading-7 text-stone-700">{item.note}</p>
                  {item.activities ? (
                    <div className="mt-5 border-t border-black/8 pt-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Activities and societies</p>
                      <ul className="mt-3 space-y-2 text-base leading-7 text-stone-700">
                        {item.activities.map((activity) => (
                          <li key={activity}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <motion.div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]" initial="hidden" variants={staggerContainer} whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
          <motion.div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.08)] backdrop-blur-md" variants={fadeUp}>
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-stone-600"><Sparkles className="h-4 w-4" />Honors & awards</div>
            <div className="space-y-6">
              {honors.map((item) => (
                <article key={item.title} className="rounded-[1.5rem] border border-black/10 bg-white/70 p-6">
                  <h3 className="text-2xl font-semibold text-stone-900">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-stone-700">Issued by {item.issuer}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-stone-500">{item.period}</p>
                  {item.detail ? <p className="mt-4 text-base leading-7 text-stone-700">{item.detail}</p> : null}
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.08)] backdrop-blur-md" variants={fadeUp}>
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-stone-600"><Brain className="h-4 w-4" />Languages</div>
            <div className="space-y-6">
              {languages.map((item) => (
                <article key={item.name} className="rounded-[1.5rem] border border-black/10 bg-white/70 p-6">
                  <h3 className="text-2xl font-semibold text-stone-900">{item.name}</h3>
                  <p className="mt-3 text-base leading-7 text-stone-700">{item.level}</p>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-8 pb-16 md:px-10">
        <motion.div
          className="rounded-[2rem] border border-black/10 bg-stone-950 px-8 py-10 text-white shadow-[0_30px_90px_rgba(23,23,23,0.25)] md:px-10"
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Let’s connect</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Open to building thoughtful software, AI experiences, and research-driven products.</h2>
              <p className="mt-4 text-base leading-7 text-white/70">If you’re looking for someone who blends engineering curiosity, product instinct, and AI fluency, I’d love to connect.</p>
              <div className="mt-6 space-y-2 text-sm leading-7 text-white/80 md:text-base">
                <p>HKU Email: u3666796@connect.hku.hk | Personal Email: wingyin110101@gmail.com</p>
                <p>Tel: +852 5303 9715</p>
              </div>
            </div>
            <a
              className="inline-flex min-w-[260px] items-center justify-center gap-3 rounded-xl bg-[#d8b16a] px-7 py-4 text-base font-extrabold tracking-[0.03em] text-[#111111] shadow-[0_20px_50px_rgba(216,177,106,0.38)] ring-1 ring-[#f4d7a3]/60 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#e2be81]"
              href="https://www.linkedin.com/in/daphne-ng-9a072b264/"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect on LinkedIn"
            >
              <span className="leading-none">Connect on LinkedIn</span>
              <ArrowUpRight className="h-5 w-5 shrink-0" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
