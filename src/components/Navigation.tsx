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
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/nsl-logo.png"
              alt="Nieruchomości Spod Lady"
              width={160}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
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
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary-light/50"
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className="inline-block ml-1 w-3 h-3"
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
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-border/50 py-2 animate-fade-in-up">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary-light/30 transition-colors"
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
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105"
            >
              Dołącz do nas
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-surface transition-colors"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
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

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-border/50 mt-2 pt-4">
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
