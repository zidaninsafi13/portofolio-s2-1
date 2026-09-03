"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePortfolio } from "@/components/providers/portfolio-provider";
import type { Locale } from "@/lib/portfolio-types";
import { assetPath } from "@/lib/asset-path";

export function Navbar() {
  const { content, introComplete, locale, setLocale, theme, toggleTheme } = usePortfolio();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const ready = Boolean(reduceMotion) || introComplete;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...content.navigation.map((item) => item.href.slice(1))];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [content.navigation]);

  useEffect(() => {
    if (!menuOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  const chooseLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setMenuOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto mx-auto max-w-[92rem] overflow-hidden border transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled || menuOpen
            ? "border-border-strong bg-nav shadow-[0_16px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-[4.25rem] items-center justify-between px-3 sm:px-5 lg:px-7">
          <a
            href="#hero"
            className="focus-ring flex min-w-0 items-center gap-3"
            aria-label={`${content.brand.title}, ${content.brand.subtitle}`}
          >
            <span className="relative size-10 shrink-0 overflow-hidden border border-border-strong bg-white/95 p-1.5 sm:size-11">
              <Image
                src={assetPath("/assets/image/logo-kampus.png")}
                alt=""
                fill
                priority
                sizes="44px"
                className="object-contain p-1"
              />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-sans text-sm font-extrabold uppercase tracking-[-0.025em] text-foreground sm:text-[0.9rem]">
                {content.brand.title}
              </span>
              <span className="mt-0.5 hidden truncate text-[0.58rem] uppercase tracking-[0.16em] text-muted min-[410px]:block sm:text-[0.62rem]">
                {content.brand.subtitle}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
            {content.navigation.map((item, index) => {
              const id = item.href.slice(1);
              const active = activeSection === id;
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                  animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.46, delay: 0.18 + index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                  aria-current={active ? "location" : undefined}
                  className={`nav-link focus-ring relative flex items-center gap-2 py-2 text-xs font-semibold uppercase tracking-[0.06em] transition-colors ${
                    active ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[0.52rem] text-accent/70">{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </motion.a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div
              className="flex border border-border bg-surface-subtle p-0.5"
              role="group"
              aria-label={content.controls.languageLabel}
            >
              {(["id", "en"] as const).map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => chooseLocale(language)}
                  aria-pressed={locale === language}
                  className={`focus-ring px-2.5 py-1.5 font-mono text-[0.62rem] font-bold uppercase transition-colors sm:px-3 ${
                    locale === language
                      ? "bg-accent text-on-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              className="focus-ring grid size-9 place-items-center border border-border bg-surface-subtle text-foreground transition-colors hover:border-accent sm:size-10"
              aria-label={theme === "dark" ? content.controls.themeLight : content.controls.themeDark}
            >
              {theme === "dark" ? <Moon aria-hidden="true" size={15} /> : <Sun aria-hidden="true" size={16} />}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="focus-ring grid size-9 place-items-center border border-border bg-surface-subtle text-foreground xl:hidden sm:size-10"
              aria-label={menuOpen ? content.controls.menuClose : content.controls.menuOpen}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={19} />}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {menuOpen ? (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-border xl:hidden"
            >
              <div className="grid gap-1 p-3 sm:grid-cols-2 sm:p-4">
                {content.navigation.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="focus-ring group flex items-center justify-between border-b border-border px-3 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-muted transition-colors hover:bg-surface-subtle hover:text-foreground"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[0.62rem] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
