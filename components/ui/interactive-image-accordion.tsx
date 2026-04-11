"use client";

import Image from "next/image";
import { useState } from "react";

type AccordionItemData = {
  id: number;
  title: string;
  imageUrl: string;
};

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Financial Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "AI + Innovation",
    imageUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Data Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Deep Learning",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "App Development",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Website Development",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 7,
    title: "API Development",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Generative AI + RAG",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "Engineering Research",
    imageUrl:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80",
  },
];

type AccordionItemProps = {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
};

function AccordionItem({ item, isActive, onMouseEnter }: AccordionItemProps) {
  return (
    <div
      className={`relative h-[420px] overflow-hidden rounded-[1.75rem] border border-white/15 bg-black/10 transition-all duration-700 ease-in-out ${isActive ? "w-[280px] md:w-[360px]" : "w-[58px] md:w-[72px]"}`}
      onFocus={onMouseEnter}
      onMouseEnter={onMouseEnter}
    >
      <Image alt={item.title} className="object-cover" fill sizes="(max-width: 768px) 280px, 360px" src={item.imageUrl} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/18 to-black/24" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

      <span
        className={`absolute text-sm font-semibold tracking-[0.18em] text-white uppercase transition-all duration-300 ease-in-out md:text-base ${
          isActive
            ? "bottom-6 left-6 max-w-[220px] translate-x-0 rotate-0"
            : "bottom-24 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap"
        }`}
      >
        {item.title}
      </span>
    </div>
  );
}

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-6 shadow-[0_30px_80px_rgba(54,34,17,0.08)] backdrop-blur-md md:p-8">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.24em] text-stone-600">Selected strengths</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
          Skills that shape how I build, analyze, and innovate.
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-stone-700">
          This section highlights the core skills I have developed across AI, software engineering, product building, and research. It reflects the areas where I can contribute most strongly and the strengths I bring to building practical, thoughtful technology.
        </p>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max flex-row items-center gap-3 md:gap-4">
          {accordionItems.map((item, index) => (
            <AccordionItem key={item.id} isActive={index === activeIndex} item={item} onMouseEnter={() => setActiveIndex(index)} />
          ))}
        </div>
      </div>
    </div>
  );
}
