import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
}

export function PageHero({ title, subtitle, badge, image }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {image ? (
          <>
            <Image src={image} alt="" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-[#0a1128]/80" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1128] to-[#1a2744]" />
        )}
      </div>
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {badge}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight font-[family-name:var(--font-montserrat)] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
