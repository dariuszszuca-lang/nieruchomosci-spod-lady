"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Strona główna" },
  {
    href: "/poznaj-nas",
    label: "Poznaj nas",
  },
  {
    href: "/regiony",
    label: "Regiony",
    children: [
      { href: "/regiony/pomorskie", label: "Pomorskie (Trójmiasto)" },
      { href: "/regiony/wroclaw", label: "Wrocław" },
      { href: "/regiony/slask", label: "Śląsk" },
      { href: "/regiony/lubuskie", label: "Lubuskie (Zielona Góra)" },
      { href: "/regiony/malopolskie", label: "Małopolska" },
      { href: "/regiony/mazowieckie", label: "Mazowieckie (Warszawa)" },
      { href: "/regiony/kujawsko-pomorskie", label: "Kujawsko-Pomorskie" },
      { href: "/regiony/warmia-i-mazury", label: "Warmia i Mazury" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/wydarzenia", label: "Wydarzenia" },
  { href: "/sklep", label: "Sklep" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-dark to-primary" />

      <nav className="glass border-b border-border/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo + name */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/nsl-logo.png"
                alt="Nieruchomości Spod Lady"
                width={44}
                height={44}
                className="h-11 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <span className="text-base font-bold text-foreground tracking-tight leading-tight block">
                  Nieruchomości
                </span>
                <span className="text-[11px] text-primary font-semibold tracking-[0.2em] uppercase leading-tight block">
                  Spod Lady
                </span>
              </div>
            </Link>

            {/* Desktop Nav — floating pill */}
            <div className="hidden lg:flex items-center bg-surface/80 rounded-full px-2 py-1.5 border border-border/50 shadow-sm">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setDropdownOpen(link.href)
                  }
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-[13px] font-medium text-foreground/70 hover:text-primary hover:bg-white rounded-full transition-all"
                  >
                    {link.label}
                    {link.children && (
                      <svg
                        className="inline-block ml-1 w-3 h-3 opacity-50"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Dropdown */}
                  {link.children && dropdownOpen === link.href && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-border/50 py-2 animate-fade-in-up">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-border/50" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary-light/30 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/czlonkostwo"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Dołącz do nas
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-surface hover:bg-primary-light transition-colors"
                aria-label="Menu"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border/30 bg-white px-4 pb-6 pt-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => !link.children && setMobileOpen(false)}
                  className="block py-3 px-4 text-base font-medium text-foreground/80 hover:text-primary transition-colors rounded-xl"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l-2 border-primary-light pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-text-secondary hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/czlonkostwo"
              onClick={() => setMobileOpen(false)}
              className="mt-4 block text-center px-6 py-3 bg-primary text-white font-semibold rounded-full"
            >
              Dołącz do nas
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
