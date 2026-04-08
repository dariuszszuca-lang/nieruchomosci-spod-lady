"use client";

import { useState } from "react";
import Image from "next/image";

// Rogi: loga regionów, reszta: zdjęcia
const galleryImages = [
  "/images/gallery/4.jpg",   // Śląsk — lewy górny róg
  "/images/gallery/12.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/3.jpg",   // Wrocław — prawy górny róg
  "/images/gallery/1.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/3a.jpg",
  "/images/gallery/2.jpg",   // Zielona Góra — prawy dolny róg
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(img)}
            className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={img}
              alt={`Galeria ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = galleryImages.indexOf(lightbox);
              setLightbox(galleryImages[(idx - 1 + galleryImages.length) % galleryImages.length]);
            }}
            className="absolute left-4 sm:left-8 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              const idx = galleryImages.indexOf(lightbox);
              setLightbox(galleryImages[(idx + 1) % galleryImages.length]);
            }}
            className="absolute right-4 sm:right-8 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt="Powiększone zdjęcie"
              width={1200}
              height={900}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
