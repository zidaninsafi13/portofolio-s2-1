"use client";

import { usePortfolio } from "@/components/providers/portfolio-provider";

export function SkipLink() {
  const { content } = usePortfolio();

  return (
    <a href="#main-content" className="skip-link">
      {content.skipLink}
    </a>
  );
}
