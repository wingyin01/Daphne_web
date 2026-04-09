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
  Wand2,
} from "lucide-react";
import portraitImage from "../ABAECEAD-324E-447B-927E-65239BA1B699_1_102_o.jpeg";
import Image from "next/image";

import Hero from "@/components/ui/demo";
import { Component as CounterCard } from "@/components/ui/davincho-hero-1";

const highlights = [
  "Retrieval-Augmented Generation (RAG)",
  "API Development",
  "Web Development",
  "Generative AI",
  "Deep Learning",
  "Database Analysis",
  "Python",
  "MATLAB",
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
    note: "Student ambassador and student chapter vice president with cross-disciplinary experience spanning software, hardware, and AI.",
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

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <section className="mx-auto max-w-7xl px-6 pt-8 pb-6 md:px-10">
        <div className="rounded-full border border-black/10 bg-white/60 px-4 py-3 text-sm uppercase tracking-[0.25em] text-stone-700 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-sm">
          Daphne Ng • Full-Stack & AI Engineer
        </div>
      </section>

      <Hero />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-8 md:grid-cols-[1.1fr_0.9fr] md:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.1)] backdrop-blur-md md:p-10">
          <div className="mb-6 flex flex-wrap gap-3 text-sm uppercase tracking-[0.25em] text-stone-600">
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">Aspiring builder</span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">AI + software</span>
            <span className="rounded-full border border-black/10 bg-white/70 px-3 py-2">Hong Kong</span>
          </div>
          <h1 className="max-w-4xl text-5xl leading-[0.94] font-semibold tracking-tight text-stone-900 md:text-7xl">
            Designing polished digital products and practical AI systems while still in the making.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
            I’m Daphne Ng, an aspiring <span className="font-semibold text-stone-900">Full-Stack & AI Engineer</span> with experience in web development, generative AI, data analysis, and engineering research.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-6 py-3 text-sm font-medium text-white" href="/daphne-ng-cv.pdf" target="_blank" rel="noreferrer">
              <Download className="h-4 w-4" />Download CV
            </a>
            <a className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-6 py-3 text-sm font-medium text-stone-900" href="https://www.linkedin.com/in/daphne-ng-9a072b264/details/skills/" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />LinkedIn<ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid gap-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[var(--card-strong)] p-5 shadow-[0_30px_80px_rgba(54,34,17,0.08)]">
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
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-6 shadow-[0_24px_60px_rgba(54,34,17,0.08)] backdrop-blur-md">
            <div className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-stone-600">
              <Wand2 className="h-4 w-4" />Interactive snippet
            </div>
            <CounterCard />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.08)] backdrop-blur-md">
          <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-stone-600">
            <BriefcaseBusiness className="h-4 w-4" />Selected strengths
          </div>
          <div className="flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-stone-800 shadow-sm">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-600">What I do</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">Technical depth shaped by both product work and research.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-7 shadow-[0_24px_60px_rgba(54,34,17,0.08)] backdrop-blur-md">
              <div className="mb-5 inline-flex rounded-2xl bg-stone-950 p-3 text-white"><Icon className="h-5 w-5" /></div>
              <h3 className="text-2xl font-semibold text-stone-900">{title}</h3>
              <p className="mt-3 text-base leading-7 text-stone-700">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.08)] backdrop-blur-md">
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-stone-600"><BriefcaseBusiness className="h-4 w-4" />Experience</div>
            <div className="space-y-7">
              {experience.map((item) => (
                <article key={item.company + item.role} className="border-t border-black/8 pt-7 first:border-t-0 first:pt-0">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-stone-900">{item.role}</h3>
                      <p className="mt-1 text-lg text-stone-700">{item.company}</p>
                    </div>
                    <div className="text-right text-sm text-stone-600"><p>{item.period}</p><p>{item.type}</p></div>
                  </div>
                  <ul className="mt-4 space-y-3 text-base leading-7 text-stone-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" /><span>{bullet}</span></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-8 shadow-[0_30px_80px_rgba(54,34,17,0.08)] backdrop-blur-md">
            <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.26em] text-stone-600"><GraduationCap className="h-4 w-4" />Education</div>
            <div className="space-y-6">
              {education.map((item) => (
                <article key={item.school} className="rounded-[1.5rem] border border-black/10 bg-white/70 p-6">
                  <h3 className="text-2xl font-semibold text-stone-900">{item.school}</h3>
                  <p className="mt-2 text-lg leading-8 text-stone-700">{item.degree}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-stone-500">{item.period}</p>
                  <p className="mt-4 text-base leading-7 text-stone-700">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-8 pb-16 md:px-10">
        <div className="rounded-[2rem] border border-black/10 bg-stone-950 px-8 py-10 text-white shadow-[0_30px_90px_rgba(23,23,23,0.25)] md:px-10">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Let’s connect</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Open to building thoughtful software, AI experiences, and research-driven products.</h2>
              <p className="mt-4 text-base leading-7 text-white/70">If you’re looking for someone who blends engineering curiosity, product instinct, and AI fluency, I’d love to connect.</p>
            </div>
            <a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-950" href="https://www.linkedin.com/in/daphne-ng-9a072b264/details/skills/" target="_blank" rel="noreferrer">
              Visit LinkedIn<ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
