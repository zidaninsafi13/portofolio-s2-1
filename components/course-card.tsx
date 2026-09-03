"use client";

import Image from "next/image";
import { ArrowUpRight, BookOpenText } from "lucide-react";
import type { Course, Locale } from "@/lib/portfolio-types";

interface CourseCardProps {
  course: Course;
  locale: Locale;
  actionLabel: string;
  onOpen: (course: Course, trigger: HTMLButtonElement) => void;
}

export function CourseCard({ course, locale, actionLabel, onOpen }: CourseCardProps) {
  const marker = course.code.slice(-2);

  return (
    <article className="playbook-panel group h-full overflow-hidden transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent">
      <button
        type="button"
        onClick={(event) => onOpen(course, event.currentTarget)}
        className="focus-ring flex h-full w-full flex-col text-left"
        aria-label={`${actionLabel}: ${course.name[locale]}`}
      >
        <span className="relative block aspect-[15/9] w-full overflow-hidden border-b border-border-strong bg-document">
          {course.image ? (
            <Image
              src={course.image}
              alt=""
              fill
              quality={78}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
            />
          ) : (
            <span className="blueprint-dots absolute inset-0 flex items-center justify-between overflow-hidden bg-accent-soft p-7">
              <svg className="absolute inset-0 size-full text-accent/30" viewBox="0 0 600 360" aria-hidden="true">
                <path d="M55 295 C150 210 235 282 300 185 S440 128 545 55" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="7 7" />
                <circle cx="55" cy="295" r="8" fill="none" stroke="currentColor" />
                <circle cx="300" cy="185" r="8" fill="none" stroke="currentColor" />
                <path d="M532 53l15 2-5 14" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <BookOpenText className="relative text-accent" size={40} strokeWidth={1.4} aria-hidden="true" />
              <span className="relative font-mono text-6xl font-bold tracking-[-0.08em] text-foreground/15">{marker}</span>
            </span>
          )}
          <span className="absolute inset-0 bg-gradient-to-t from-[#031017]/80 via-transparent to-transparent" aria-hidden="true" />
          <span className="absolute left-3 top-3 border border-white/20 bg-black/50 px-2.5 py-1.5 font-mono text-[0.56rem] font-bold uppercase tracking-[0.12em] text-white">
            {course.tag[locale]}
          </span>
          <span className="absolute bottom-3 right-3 grid size-9 place-items-center border border-white/25 bg-black/35 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={16} aria-hidden="true" />
          </span>
          <span className="absolute bottom-3 left-3 font-mono text-xs font-bold tracking-[0.15em] text-cyan-200">{course.code}</span>
        </span>

        <span className="flex flex-1 flex-col p-6 sm:p-7">
          <span className="flex items-center gap-3 font-mono text-[0.56rem] uppercase tracking-[0.17em] text-muted">
            <span className="size-1.5 bg-accent" />
            Catatan refleksi 4C
          </span>
          <span className="mt-4 font-sans text-2xl font-extrabold uppercase leading-[1.02] tracking-[-0.045em] text-foreground sm:text-[1.65rem]">
            {course.name[locale]}
          </span>
          <span className="mt-4 flex-1 text-sm leading-7 text-muted">{course.summary[locale]}</span>
          <span className="mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-[0.62rem] font-bold uppercase tracking-[0.1em] text-accent">
            {actionLabel}
            <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </span>
      </button>
    </article>
  );
}
