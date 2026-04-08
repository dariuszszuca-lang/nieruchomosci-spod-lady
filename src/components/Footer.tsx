import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  "O nas": [
    { href: "/poznaj-nas", label: "Poznaj nas" },
    { href: "/nieruchomosci-spod-lady", label: "O projekcie" },
    { href: "/blog", label: "Blog" },
    { href: "/wydarzenia", label: "Wydarzenia" },
  ],
  Regiony: [
    { href: "/regiony/pomorskie", label: "Pomorskie" },
    { href: "/regiony/wroclaw", label: "Wrocław" },
    { href: "/regiony/slask", label: "Śląsk" },
    { href: "/regiony/mazowieckie", label: "Warszawa" },
    { href: "/regiony/malopolskie", label: "Małopolska" },
    { href: "/regiony", label: "Wszystkie regiony →" },
  ],
  "Dla agentów": [
    { href: "/czlonkostwo", label: "Dołącz do nas" },
    { href: "/sklep", label: "Sklep" },
    { href: "/logo", label: "Logo do pobrania" },
    { href: "/regulamin", label: "Regulamin" },
    { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
  ],
};

const socialLinks = [
  {
    href: "https://facebook.com/Nieruchomoscispodlady-102583222116277",
    label: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/sylwia-wróblewska-417682131",
    label: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/nsl-logo.png"
                alt="Nieruchomości Spod Lady"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <div>
                <span className="text-lg font-semibold tracking-tight">
                  Nieruchomości
                </span>
                <span className="block text-xs text-primary font-medium -mt-1 tracking-widest uppercase">
                  Spod Lady
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Ogólnopolska społeczność 1600+ agentów nieruchomości. Współpraca
              zamiast rywalizacji. Oferty off-market, szkolenia, webinary i
              wspólne transakcje.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Nieruchomości Spod Lady Sp. z o.o. |
            KRS 0000959155 | NIP 5833446343
          </p>
          <p className="text-xs text-white/40">
            ul. Goplańska 148/2, 80-178 Gdańsk
          </p>
        </div>
      </div>
    </footer>
  );
}
