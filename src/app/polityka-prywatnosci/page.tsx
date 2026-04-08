import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności — Nieruchomości Spod Lady",
  description: "Polityka prywatności i informacje o przetwarzaniu danych osobowych w serwisie NieruchomosciSpodLady.pl",
};

export default function PolitykaPrywatnosci() {
  return (
    <>
      <PageHero title="Polityka Prywatności" subtitle="Informacje o przetwarzaniu danych osobowych" />

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-text-secondary [&_h2]:text-foreground [&_h2]:font-[family-name:var(--font-montserrat)] [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h3]:text-foreground [&_h3]:text-lg [&_h3]:mt-8 [&_h3]:mb-4 [&_strong]:text-foreground [&_ul]:space-y-2 [&_ol]:space-y-2">
            <h2>I. Administrator</h2>
            <p>
              Administratorem danych osobowych jest <strong>Nieruchomości Spod Lady Sp. z o.o.</strong> z siedzibą w Gdańsku (80-178), ul. Goplańska 148/2, REGON 521447775, NIP 5833446343, KRS 0000959155.
            </p>
            <p>
              Kontakt: <a href="mailto:kontakt@nieruchomoscispodlady.pl" className="text-primary hover:underline">kontakt@nieruchomoscispodlady.pl</a>
            </p>

            <h2>II. Ochrona danych osobowych</h2>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę przetwarzanych danych osobowych, zgodnie z art. 32 ust. 1 RODO.
            </p>

            <h2>III. Cele przetwarzania danych</h2>
            <ul>
              <li>Zawieranie i realizacja umów</li>
              <li>Świadczenie usług drogą elektroniczną</li>
              <li>Marketing bezpośredni własnych produktów i usług</li>
              <li>Badanie opinii i satysfakcji użytkowników</li>
            </ul>

            <h3>Podstawy prawne przetwarzania:</h3>
            <ul>
              <li>Art. 6 ust. 1 lit. a RODO — zgoda osoby</li>
              <li>Art. 6 ust. 1 lit. b RODO — wykonanie umowy</li>
              <li>Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes</li>
            </ul>

            <h2>IV. Odbiorcy danych osobowych</h2>
            <ul>
              <li>Pracownicy i współpracownicy Administratora</li>
              <li>Dostawcy usług IT i marketingowych</li>
              <li>MailerLite (system mailingowy)</li>
              <li>Podmioty uprawnione na podstawie przepisów prawa</li>
            </ul>

            <h2>V. Okres przechowywania danych</h2>
            <ul>
              <li>Dane przetwarzane na podstawie zgody — do momentu jej wycofania</li>
              <li>Dane dotyczące realizacji umowy — przez okres trwania współpracy</li>
              <li>Dane rachunkowe — 5 lat od końca roku obrachunkowego</li>
              <li>Dane dotyczące roszczeń — 3 lata</li>
            </ul>

            <h2>VI. Prawa użytkownika</h2>
            <p>Każdemu użytkownikowi przysługuje prawo do:</p>
            <ul>
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych (&quot;prawo do bycia zapomnianym&quot;)</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
              <li>Wniesienia skargi do UODO</li>
            </ul>

            <h2>VII. Polityka Cookies</h2>
            <p>Serwis wykorzystuje pliki cookies w celach:</p>
            <ul>
              <li><strong>Niezbędne</strong> — zapewnienie prawidłowego działania strony</li>
              <li><strong>Wydajnościowe</strong> — Google Analytics, Facebook Pixel</li>
              <li><strong>Funkcjonalne</strong> — zapamiętanie preferencji użytkownika</li>
              <li><strong>Reklamowe</strong> — dostosowanie reklam</li>
            </ul>
            <p>
              Użytkownik może zarządzać plikami cookies w ustawieniach swojej przeglądarki.
            </p>

            <div className="mt-16 p-6 bg-surface rounded-2xl border border-border/50">
              <p className="text-sm text-text-secondary">
                <strong className="text-foreground">Nieruchomości Spod Lady Sp. z o.o.</strong><br />
                ul. Goplańska 148/2, 80-178 Gdańsk<br />
                KRS 0000959155 | NIP 5833446343 | REGON 521447775<br />
                kontakt@nieruchomoscispodlady.pl
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
